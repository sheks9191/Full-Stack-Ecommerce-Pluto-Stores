const mongoose = require('mongoose')

const WishlistsSchema = new mongoose.Schema({
    names:{
        type:[String],
        required:[true,'Please provide product names'],
        trim:true
    },
     price:{
        type:Number,
        required:[true,'Please provide product price'],
        default:0,
    },
    image: {
        type:String,
        required:[true,'Please provide product images'],
    },
     productID: {
        type:String,
        required:[true,'Please provide product ID'],
    },
     size:{
        type:Number,
        default:5,
    },
     user:{
            type:mongoose.Types.ObjectId,
            ref:'User',
            required:true,
        }
},{timestamps:true})


module.exports = mongoose.model('Wishlists',WishlistsSchema)