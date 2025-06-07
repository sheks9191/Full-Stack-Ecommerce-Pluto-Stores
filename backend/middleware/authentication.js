const CustomError = require('../errors');
const {verifyToken} = require('../utils/token')


const authenticateUser = async (req,res,next) => {

    const token = req.signedCookies.token;
    // console.log(token)
    if(!token){
        throw new CustomError.UnauthenticatedError('Authentication Invalid');

    }

    try {
       const {userID,userName,role} = verifyToken(token);
       req.user = {userName,userID,role};
       next();
       
    } catch (error) {
        throw new CustomError.UnauthenticatedError('Authentication Invalid'); 
    }    
}

const authorizePermissions = (...rest) => {
    
    return (req,res,next) => {
    const {user:{role}} = req 
      if(!rest.includes(role)){
        throw new CustomError.UnauthorizedError('Unauthorized Access')
    }

     next();
    }
      
      
    }

module.exports = {
    authenticateUser,
    authorizePermissions,
}