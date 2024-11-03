import userModel from '../../models/userModel.js';

async function userDetailsController(req,res){
  try{
    console.log('userId',req.userId);
    const user = await userModel.findOne({ _id: req.userId, deletedAt: null });

    res.status(200).json({
      data : user,
      error : false,
      success : true,
      message : 'User details',
    });

    console.log('user',user);

  }catch(err){
    res.status(400).json({
      message : err.message || err,
      error : true,
      success : false,
    });
  }
}

export default userDetailsController;