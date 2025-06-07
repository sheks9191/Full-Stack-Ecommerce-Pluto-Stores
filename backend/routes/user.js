const express = require('express')
const router = express.Router();
const {authenticateUser, authorizePermissions} = require('../middleware/authentication') 

const {
    getAllUsers,getSingleUser,showCurrentUser,updateUser,updateUserPassword
} = require('../controllers/user')


router.route('/').get(authenticateUser, authorizePermissions('admin'),getAllUsers);

router.route('/current-user').get(authenticateUser,showCurrentUser);

router.route('/update-user').patch(authenticateUser,updateUser);

router.route('/update-user-password').patch(authenticateUser,updateUserPassword)

router.route('/:id').get(authenticateUser,getSingleUser);

module.exports = router;