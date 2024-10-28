import mongoose from 'mongoose';

async function connectDB() {
  try{

    await mongoose.connect(process.env.MONGODB_URI);

    return Promise.resolve();

  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit the process on failure
  }
}

export default connectDB;
