const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    rating:{
        type:Number,
        required:[true,'Please provide rating'],
        min:1,
        max:5
    },

       title:{
        type:String,
        trim:true,
        required:[true,'Please review title'],
        minLength:3,
        maxLength:150
    },


      comment:{
        type:String,
        trim:true,
        minLength:3,
        required:[true,'Please review title'],
    },

      reviewedBy:{
        type:String,
        trim:true,
        // required:[true,'Please review title'],
    },

    user: {
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true,
    },

    
     product: {
        type:mongoose.Schema.ObjectId,
        ref:'Products',
        required:true,
    }


},{timestamps:true})

ReviewSchema.index({product:1, user:1},{unique:true})


// ReviewSchema.methods.populateUsername =async function(userID){
//   const reviewer = await this.model('User').findById({_id:userID})
//   return reviewer
//   // try {
//   //  const user = await this.model('User').findById({_id:userID})
//   //  console.log(user);
//   // } catch (error) {
    
//   // }
// }

ReviewSchema.statics.calAvgRating = async function(productID){
  const result = await this.aggregate([

    {$match : {product:productID}},
    {$group:{
        _id:null,
        averageRating:{$avg:'$rating'},
        reviewsNum:{$sum:1}
    }}
  ]);

  try {
    await this.model('Products').findOneAndUpdate(
     {_id:productID},
     {
        
      averageRating:Math.ceil(result[0]?.averageRating || 0),
      reviewsNum:result[0]?.reviewsNum || 0,

     }

    )
  } catch (error) {
    console.log(error);
  }
}

ReviewSchema.post('save', async function () {
    await this.constructor.calAvgRating(this.product);
    
})

ReviewSchema.post('remove', async function () {
    await this.constructor.calAvgRating(this.product);
})

module.exports = mongoose.model('Review',ReviewSchema);