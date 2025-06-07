const User = require('../models/User');
const {StatusCodes} = require('http-status-codes');
const CustomError = require('../errors')
const {addCookiesToResponse} = require('../utils/token')


const register = async (req, res) => {

   const {body:{email,name,password}} = req

   const existEmail = await User.findOne({email})
   if(existEmail){
        throw new CustomError.BadRequestError('Email already exists')
   }
  
   const initialAccount = await User.countDocuments({}) === 0;

   const role = initialAccount ? 'admin' : 'user'

   const user = await User.create({name,email,password,role});

   const userInfo = {name:user.name, userID:user._id, role:user.role};
   l:user.email
   const token = user.generateToken(); 
  
   addCookiesToResponse({res,token})
 
   res.status(StatusCodes.CREATED).json({user:userInfo})
}



const login = async (req, res) => {
   const {body:{email,password}} = req

   if(!email || !password){
      throw new CustomError.BadRequestError('Please provide email and password');
   }
 const user = await User.findOne({email});

 if(!user){
    throw new CustomError.UnauthenticatedError('Email Is Not Valid!');
 }

 const verifyPassword = await user.validatePassword(password);

 if(!verifyPassword){
   throw new CustomError.UnauthenticatedError('Password Is Not Valid!');
 }

  const userInfo = {name:user.name, userID:user._id, role:user.role};
   
   const token = user.generateToken(); 
  
   addCookiesToResponse({res,token})
 
   res.status(StatusCodes.OK).json({user:userInfo})

}



const logout = async (req, res) => {
   res.cookie('token','',{
      httpOnly:true,
      expires:new Date(Date.now()),
   })

    res.status(StatusCodes.OK).json({msg:'User Logged Out!'})
}


module.exports = {
    register,
    login,
    logout
}