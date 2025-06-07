const mongoose = require('mongoose')


const OrderSchema = new mongoose.Schema({
   
 name:{
    type:String,
    required:[true, 'Please provide name'],
    minLength:2,
    maxLength:30,
},

 email:{
    type:String,
    required:[true, 'Please provide email'],
},

  address:{
    type:String,
    required:[true, 'Please provide address'],
   
},

  phone:{
    type:String,
    required:[true, 'Please provide phone'],
    
},
 cartItems:{
      type:[Object],
      required:true,
    },
    
    numberOfCartItems:{
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


module.exports = mongoose.model('Order',OrderSchema)