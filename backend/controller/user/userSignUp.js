import UserModel from '../../models/userModel.js';
import bcrypt from 'bcryptjs';

async function userSignUp(req, res) {
  try {
    const { email, name, password } = req.body;

    // Validate input
    if (!email || !name || !password) {
      return res.status(400).json({
        message: 'Please provide email, name, and password.',
        error: true,
        success: false,
      });
    }

    // Check if user already exists
    const existingUser = await UserModel.findOne({ email, deletedAt: null });
    if (existingUser) {
      return res.status(409).json({
        message: 'User already exists.',
        error: true,
        success: false,
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    if (!hashPassword) {
      return res.status(500).json({
        message: 'Something went wrong while hashing the password.',
        error: true,
        success: false,
      });
    }

    // Create new user
    const payload = { ...req.body, password: hashPassword };
    const user = await UserModel.create(payload);

    // Send success response
    return res.status(201).json({
      data: user,
      success: true,
      error: false,
      message: 'User created successfully!',
    });
  } catch (err) {
    console.error(err); // Log error for debugging
    return res.status(500).json({
      message: 'Internal server error.',
      error: true,
      success: false,
    });
  }
}

export default userSignUp;
