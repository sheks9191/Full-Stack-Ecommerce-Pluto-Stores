
const express = require('express');
const router = express.Router();
const {authenticateUser, authorizePermissions} = require('../middleware/authentication'); 
const {createOrder,getAllOrders,deleteOrder} = require('../controllers/orders')


router.route('/').get(getAllOrders).post(authenticateUser,createOrder)
router.route('/:id').delete(authenticateUser,authorizePermissions('admin'),deleteOrder)


module.exports = router;