import express from 'express';
import userSignUp from '../controller/user/userSignUp.js';
import userSignIn from '../controller/user/userSignIn.js';
import userDetails from '../controller/user/userDetails.js';
import userLogout from '../controller/user/userLogout.js';

import authToken from '../middleware/authToken.js';
import allUsers from '../controller/user/allUsers.js';
import updateUser from '../controller/user/updateUser.js';

const router = express.Router();


router.post('/signup', userSignUp);
router.post('/signin', userSignIn);
router.get('/user-details',authToken, userDetails);
router.get('/userLogout', userLogout);

// admin panel
router.get('/all-user', authToken, allUsers);
router.post('/update-user',authToken,updateUser);


export default router;