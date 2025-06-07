const express = require('express');
const router = express.Router();
const {authenticateUser} = require('../middleware/authentication'); 
const {createWishlist,getAllWishlists,deleteWishlist} = require('../controllers/wishlists')


router.route('/').post(authenticateUser,createWishlist).get(authenticateUser,getAllWishlists)
router.route('/:id').delete(authenticateUser,deleteWishlist)

module.exports = router;