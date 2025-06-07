const Wishlists = require('../models/Wishlists')
const Cart = require('../models/Cart')
const {StatusCodes} = require('http-status-codes');
const CustomError = require('../errors');


const createCart = async (req,res) => {
  const {user:{userID}} = req
  const existingCart = await Cart.findOne({user:userID})
  if(existingCart){
    res.status(StatusCodes.CREATED).json({msg:'existed'});
    return
  }

   req.body.user = userID


   
  const wishlistCount = await Wishlists.countDocuments({user:userID})
   req.body.numberOfWishlistItems = wishlistCount

  const cart = await Cart.create(req.body)
  
  res.status(StatusCodes.CREATED).json({cart});   
}

const getCartByUser = async (req,res) => {
   const {user:{userID}} = req
   const wishlistCount = await Wishlists.countDocuments({user:userID})
   const cart = await Cart.find({user:userID});
  
   res.status(StatusCodes.OK).json({cart,wishlistCount})

}

const updateCart = async (req,res) => {
  

    const {body,user:{userID}} = req
      const cart = await Cart.findOneAndUpdate({user:userID},body,{
          new:true,
          runValidators:true,
      })
  
      if(!cart){
          throw new CustomError.NotFoundError(`No cart with userid : ${userID}`);
      }
  
      res.status(StatusCodes.OK).json({cart})
}

const deleteCart = async (req,res) => {

}

module.exports ={createCart,getCartByUser,updateCart,deleteCart}