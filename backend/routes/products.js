const express = require('express');
const router = express.Router();
const {authenticateUser, authorizePermissions} = require('../middleware/authentication'); 

const {
    createProduct,getAllProducts,getSingleProduct,updateProduct,deleteProduct
} = require('../controllers/products')
const {uploadImages} = require('../controllers/uploadImages')



router.route('/').get(getAllProducts).post(authenticateUser, authorizePermissions('admin'),createProduct)
router.route('/uploads-image').post(authenticateUser, authorizePermissions('admin'),uploadImages)
router.route('/:id').get(getSingleProduct).patch(authenticateUser, authorizePermissions('admin'),updateProduct).delete(authenticateUser, authorizePermissions('admin'),deleteProduct)



module.exports = router;