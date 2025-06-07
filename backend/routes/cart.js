const express = require('express')
const router = express.Router()
const {authenticateUser} = require('../middleware/authentication'); 

const {createCart,updateCart,deleteCart, getCartByUser} = require('../controllers/cart')


router.route('/').post(authenticateUser,createCart).get(authenticateUser,getCartByUser)
router.route('/:id').patch(authenticateUser,updateCart).delete(authenticateUser,deleteCart)

module.exports = router;