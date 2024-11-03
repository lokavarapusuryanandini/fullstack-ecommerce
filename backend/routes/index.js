import express from 'express';
import userSignUp from '../controller/user/userSignUp.js';
import userSignIn from '../controller/user/userSignIn.js';
import userDetails from '../controller/user/userDetails.js';
const router = express.Router();


router.post('/signup', userSignUp);
router.post('/signin', userSignIn);
router.get('/user-details', userDetails);

export default router;