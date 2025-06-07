const Product = require('../models/Products')
const {StatusCodes} = require('http-status-codes');
const CustomError = require('../errors');


const createProduct = async (req,res) => {
    req.body.user = req.user.userID
    const product = await Product.create(req.body)
    res.status(StatusCodes.CREATED).json({product});
   
};

const getAllProducts = async (req,res) => {
    
    const {query:{category,search,featured,newest}} = req
   
    const filteredItems = req.query
    const queryKey = Object.keys(filteredItems)[0]
    
    const categoryList = ['rings','bracelets','earrings','necklaces']
    const categoryArray = []
    const gemstoneArray = []
    const productsObj = {}

if(queryKey !== 'category' && queryKey !== 'featured' && queryKey !== 'high - low' && queryKey !== 'low - high' && queryKey !== 'newest'){
   for(let item in filteredItems){
       if(categoryList.includes(item)){
        categoryArray.push(item)
       }else{
        gemstoneArray.push(item)
       }
    }
}
   
    if(categoryArray.length > 0){
        productsObj.category = categoryArray
    }

    if(gemstoneArray.length > 0){
        productsObj.gemstone = gemstoneArray
    }

    if(featured){
        productsObj.featured = featured
    }

   if(category === 'all'){
      productsObj.category = ''
   }

    if(category){
        productsObj.category = category
    }

    if(newest){
        productsObj.featured = true
    }
    if(search){
      productsObj.names = { $regex: search, $options: 'i' };
    }

    let temProducts = Product.find(productsObj);

    if(queryKey === 'high - low'){
      temProducts =  temProducts.sort('-price')
    }

     if(queryKey === 'low - high'){
      temProducts =  temProducts.sort('price')
    }

    const products = await temProducts

    res.status(StatusCodes.OK).json({products, noHits:products.length})
};
const getSingleProduct = async (req,res) => {
    const{params:{id:productID}} = req
    const product = await Product.findOne({_id:productID}).populate('reviews')

    if(!product){
        throw new CustomError.NotFoundError(`No product with id : ${productID}`);
    }

    res.status(StatusCodes.OK).json({product})
};
const updateProduct = async (req,res) => {
     const{params:{id:productID}} = req
    //  console.log(req.body);
    const product = await Product.findOneAndUpdate({_id:productID},req.body,{
        new:true,
        runValidators:true,
    })

    

    if(!product){
        throw new CustomError.NotFoundError(`No product with id : ${productID}`);
    }

    res.status(StatusCodes.OK).json({product})
};
const deleteProduct = async (req,res) => {
   const{params:{id:productID}} = req
     const product = await Product.findOne({_id:productID});

    if(!product){
        throw new CustomError.NotFoundError(`No product with id : ${productID}`);
    }

    await product.remove();
    res.status(StatusCodes.OK).json({msg:"Product removed successfully"})
};

module.exports = {
    createProduct,getAllProducts,getSingleProduct,updateProduct,deleteProduct
}