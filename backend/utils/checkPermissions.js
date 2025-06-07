const CustomError = require('../errors')


const checkPermissions = (requestUser, resourceUserID) => {
 
    if(requestUser.role === 'admin') return;
    

    if(requestUser.userID === resourceUserID.toString()) return;

    throw new CustomError.UnauthorizedError("Unauthorized route")
}

module.exports = checkPermissions;