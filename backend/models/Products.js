const mongoose = require('mongoose');



const ProductsSchema = new mongoose.Schema({
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
    description: {
        type:String,
        required:[true,'Please provide product price'],
         trim:true,
         minLength:10,
    },
    images: {
        type:[String],
        required:[true,'Please provide product images'],
    },
    category:{
        type:String,
        required:[true,'Please provide product category'],
        enum:['rings','necklaces','bracelets','earrings'],
    },
    size:{
        type:Number,
        default:5,
    },

    gemstone:{
        type:String,
        required:[true,'Please provide product category'],
    },

    stock:{
        type:Number,
        required:[true,'Please provide product count'],
        default:0,
    },

    featured:{
       type:Boolean,
       default:false,
    },

     details: {
        type:[String],
        required:[true,'Please provide product details'],
    },

    averageRating:{
        type:Number,
        default:0,
        
    },
     reviewsNum:{
        type:Number,
        default:0,
        
    },

    properties:{
      
        first:{
            type:String,
             required:[true,'Please provide product properties'],
             trim:true,
             minLength:10,
            
        },
         second:{
            type:String,
             required:[true,'Please provide product properties'],
             trim:true,
             minLength:10,
             
        },

    },

    shipping:{
           returns:{
            type:String,
             required:[true,'Please provide shipping info'],
             trim:true,
             minLength:10,
            
        },
         customs:{
            type:String,
             required:[true,'Please provide customs details'],
             trim:true,
             minLength:10,
             
        },
    },

    user:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:true,
    }
},{timestamps:true, toJSON:{virtuals: true},toObject:{virtuals: true}})

ProductsSchema.virtual('reviews',{
    ref:"Review",
    localField:'_id',
    foreignField:'product',
    justOne:false,
})

ProductsSchema.pre('remove',async function(){
    await this.model('Review').deleteMany({product:this._id})
})

module.exports = mongoose.model('Products',ProductsSchema)