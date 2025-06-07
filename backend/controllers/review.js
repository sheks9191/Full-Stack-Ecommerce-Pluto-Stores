const Review = require('../models/Review')
const Product = require('../models/Products')
const User = require('../models/User')
const {StatusCodes} = require('http-status-codes');
const CustomError = require('../errors');
const checkPermissions = require('../utils/checkPermissions');


const createReview = async(req,res) => {
    
    const {body:{product:productID},user:{userID}} = req;
    
    const verifyProduct = await Product.findOne({_id:productID}) 

    if(!verifyProduct){
        throw new CustomError.NotFoundError(`No product with id: ${productID}`)
    }

    const productReviewed = await Review.findOne({
        product:productID,
        user:userID,
    })

    if(productReviewed){
      throw new CustomError.BadRequestError(`Product already reviewed `)  
    }

    const reviewer = await User.findById({_id:userID}) 
    
     
    req.body.reviewedBy = reviewer.name
    req.body.user = userID
    const review = await Review.create(req.body)
    res.status(StatusCodes.CREATED).json({review})
};

const getAllReviews = async(req,res) => {
    const {query:{sort}} = req
    // console.log(sort);
    let tempReviews = Review.find({}).populate({
        path:'user',
        select:'name'
    });

    if(sort === 'oldest'){
        tempReviews = tempReviews.sort('createdAt')
    }

     if(sort === 'newest'){
        tempReviews = tempReviews.sort('-createdAt')
    }
    const reviews = await tempReviews

    res.status(StatusCodes.OK).json({reviews, noHits:reviews.length});
};

const getSingleReview = async(req,res) => {
    const {params:{id:reviewID}} = req
    
    const review = await Review.findOne({_id:reviewID}).populate({
        path:'user',
        select:'name',
    });

    if(!review){
        throw new CustomError.NotFoundError(`No product with id: ${reviewID}`)
    }

     res.status(StatusCodes.OK).json({review});
};

const updateReview = async(req,res) => {
         const {params:{id:reviewID},body:{rating,title,comment}} = req
    
    const review = await Review.findOne({_id:reviewID});

    if(!review){
        throw new CustomError.NotFoundError(`No product with id: ${reviewID}`)
    }

    checkPermissions(req.user, review.user);
      review.rating = rating
      review.title = title
      review.comment = comment
      await review.save();
     res.status(StatusCodes.OK).json({review});
};

const deleteReview = async(req,res) => {
        const {params:{id:reviewID}} = req
    
    const review = await Review.findOne({_id:reviewID});

    if(!review){
        throw new CustomError.NotFoundError(`No product with id: ${reviewID}`)
    }

    checkPermissions(req.user, review.user);

     await review.remove();
     res.status(StatusCodes.OK).json({msg:'Success! Review deleted'});
};


module.exports = {
    createReview,getAllReviews,getSingleReview,updateReview,deleteReview
}