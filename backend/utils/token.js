const JWT = require('jsonwebtoken');




const verifyToken =(token) => JWT.verify(token, process.env.JWT_SECRET)

const addCookiesToResponse = ({res, token}) => {

    const cookieTime = 1000 * 60 * 60 * 24;

   res.cookie('token',token, {
      httpOnly:true,
      expires:new Date(Date.now() + cookieTime),
      // expires:new Date(Date.now()),
    //   secure:process.env.NODE_ENV === 'production',
      secure:true,
       
      sameSite:'none',
      signed:true,
   })
}


module.exports = {
    verifyToken,
    addCookiesToResponse
}