const Wishlists = require('../models/Wishlists')
const Products = require('../models/Products')
const {StatusCodes} = require('http-status-codes');
const CustomError = require('../errors');


const createWishlist = async (req,res) => {
    const {user:{userID}} = req

    let dataFromLS;
    let authorizedData;
    if(!Array.isArray(req.body)){
        req.body.user = userID
        authorizedData = req.body   
    }

    
    if(authorizedData){
       const {price,images,names} = await Products.findById({_id:authorizedData.productID})
       authorizedData = {...authorizedData,price,names,image:images[0]}
    }
    
    

    if(req.body.length > 0){
       dataFromLS = req.body.map(product => {{
        
        return {...product,user:userID}
       }})
    }
    
    const wishlistsData = dataFromLS || authorizedData
    const productID = authorizedData?.productID
    

    const existingProduct = await Wishlists.findOne({productID,user:userID})


    if(existingProduct){
    throw new CustomError.BadRequestError(`Product already added `) 
    }

    
    const wishlist = await Wishlists.create(wishlistsData)
    
    res.status(StatusCodes.CREATED).json({wishlist})
}


const getAllWishlists = async (req,res) => {
    
    const {user:{userID}} = req
    const wishlists = await Wishlists.find({user:userID})
     res.status(StatusCodes.OK).json({wishlists});
    
}

const deleteWishlist = async(req,res) => {
    const {user:{userID},params:{id:productID}} = req
    const deletedWishlist = await Wishlists.findOneAndDelete({productID,user:userID})

    if(!deletedWishlist ){
       throw new NotFoundError(`No product with the id ${productID} `); 
    }
    res.status(StatusCodes.OK).send('Success! Wishlist removed')
};


module.exports = {
    createWishlist,getAllWishlists,deleteWishlist
}