const User = require('../models/User')
const {StatusCodes} = require('http-status-codes');
const CustomError = require('../errors');
const {addCookiesToResponse} = require('../utils/token');
const checkPermissions = require('../utils/checkPermissions');


const getAllUsers = async (req,res) => {
    
    let users = await User.find({role:'user'}).select('-password');
    res.status(StatusCodes.OK).json({users,noHits:users.length})
}

const getSingleUser = async (req,res) => {
   const {params:{id}} = req
   const user = await User.findOne({_id:id}).select('-password');

   if(!user) {
    throw new CustomError.NotFoundError(`No user with id : ${id}`)
   }
   
   checkPermissions(req.user, user._id);
   
   res.status(StatusCodes.OK).json({user})
}

const showCurrentUser = async (req,res) => {
    res.status(StatusCodes.OK).json({user:req.user})
}

const updateUser = async (req,res) => {
   const{body:{email, name},user:{userID}} = req

   if(!email || !name) {
     throw new CustomError.BadRequestError('PLease provide all inputs')
   }

   const user = await User.findOneAndUpdate(
    {_id:userID},
    {email, name},
    {new:true, runValidators:true}
   )

   const userInfo = {name:user.name, userID:user._id, role:user.role };

   const token = user.generateToken(); 
  
   addCookiesToResponse({res,token})
   res.status(StatusCodes.OK).json({user:userInfo})
}

const updateUserPassword = async (req,res) => {
    const {body:{initialPassword,newPassword},user:{userID}} = req


    if(!initialPassword || !newPassword){
        throw new CustomError.BadRequestError('PLease provide both inputs')
    }

    const user = await User.findOne({_id:userID})
    
    const verifyPassword = await user.validatePassword(initialPassword);
    
     if(!verifyPassword){
       throw new CustomError.UnauthenticatedError('Invalid Credentials');
     }

     user.password = newPassword;

     await user.save();

    res.status(StatusCodes.OK).json({msg:'Password updated successfully'})
}

module.exports = {
    getAllUsers,getSingleUser,showCurrentUser,updateUser,updateUserPassword
}