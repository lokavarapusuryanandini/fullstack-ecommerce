import express from 'express';
import userSignUp from '../controller/user/userSignUp.js';
const router = express.Router();


router.post('/signup', userSignUp);

export default router;