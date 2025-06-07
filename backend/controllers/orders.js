const Orders = require('../models/Order')
const {StatusCodes} = require('http-status-codes');

const CustomError = require('../errors');



const createOrder = async(req,res) => {
  req.body.user = req.user.userID
  console.log(req.body);
 const order = await Orders.create(req.body)
 res.status(StatusCodes.CREATED).json({order});
}

const getAllOrders = async(req,res) => {
    const {query:{sort}} = req
     // console.log(sort);
     let tempOrders = Orders.find({}).populate({
         path:'user',
         select:'name'
     });
 
     if(sort === 'oldest'){
         tempOrders = tempOrders.sort('createdAt')
     }
 
      if(sort === 'newest'){
         tempOrders = tempOrders.sort('-createdAt')
     }
     const orders = await tempOrders
 
     res.status(StatusCodes.OK).json({orders, noHits:orders.length});
}

const deleteOrder = async (req,res) => {
   const{params:{id:orderID}} = req
     const order = await Orders.findOne({_id:orderID});

    if(!order){
        throw new CustomError.NotFoundError(`No product with id : ${orderID}`);
    }

    await order.remove();
    res.status(StatusCodes.OK).json({msg:"Order removed successfully"})
};

module.exports = {
    createOrder,getAllOrders,deleteOrder
}