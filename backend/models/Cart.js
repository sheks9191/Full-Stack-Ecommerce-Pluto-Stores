const mongoose = require('mongoose')


const CartSchema = new mongoose.Schema({
    cartItems:{
      type:[Object],
      required:true,
    },
    numberOfCartItems:{
        type:Number,
        required:true,
        default:0,
    },
     numberOfWishlistItems:{
        type:Number,
        required:true,
        default:0,
    },
     cartTotal:{
        type:Number,
        required:true,
        default:0,
    },
      VAT:{
        type:Number,
        required:true,
        default:0,
    },

      shippingAmt:{
        type:Number,
        required:true,
        default:0,
    },

      orderTotal:{
        type:Number,
        required:true,
        default:0,
    },
    
     user:{
            type:mongoose.Types.ObjectId,
            ref:'User',
            required:true,
        }
},{timestamps:true})


module.exports = mongoose.model('Cart',CartSchema)