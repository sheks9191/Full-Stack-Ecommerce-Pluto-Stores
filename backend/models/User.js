const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken')

const UserSchema = new mongoose.Schema ({
  name:{
    type:String,
    required:[true, 'Please provide name'],
    minLength:2,
    maxLength:30,
},

  email:{
    type:String,
    required:[true, 'Please provide email'],
    unique:true,
    validate:{
        validator:validator.isEmail,
        message:'Please provide valid email'
    }
   
},

  password:{
    type:String,
    required:[true, 'Please provide password'],
    minLength:5,
   
},

role:{
    type:String,
    enum:['admin','user'],
    default:'user',
}

})


UserSchema.pre('save', async function(){
  const addSalt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, addSalt)
})

UserSchema.methods.generateToken = function(){
  return JWT.sign({userID:this._id, userName:this.name,role:this.role},process.env.JWT_SECRET,{expiresIn:process.env.JWT_DURATION})
}

UserSchema.methods.validatePassword = async function(userPassword){
  const matchPassword = await bcrypt.compare(userPassword, this.password)

  return matchPassword
}

module.exports = mongoose.model('User', UserSchema)