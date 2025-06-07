const path = require('path')
const CustomError = require('../errors');
const cloudinary = require('cloudinary').v2;
const fs = require('fs')
const {StatusCodes} = require('http-status-codes');

const uploadImagesLocal = async (req, res) => {
  // console.log(req.files);
  if(!req.files){
    throw new CustomError.BadRequestError('No file uploaded')
  }
  const {files:{image}} = req

 
  if(!image.mimetype.startsWith('image')){
    throw new CustomError.BadRequestError('Please upload an image')
  }

  const maxSize = 1024 * 1024

  if(image.size > maxSize){
    throw new CustomError.BadRequestError('Image size should not exceed 1MB')
  }

  const imagePath = path.join(__dirname,'../public/pluto-images/'+`${image.name}`)

  await image.mv(imagePath)
  return res.status(StatusCodes.OK).json({image:`/pluto-images/${image.name}`})
}

const uploadImages = async(req,res) => {
  // console.log(req.files.image);
  const {files:{image}} = req
  const result = await cloudinary.uploader.upload(image.tempFilePath,{
    use_filename:true,
    folder:'pluto-images',
  })

     
  // console.log(result);
  fs.unlinkSync(image.tempFilePath);
  return res.status(StatusCodes.OK).json({image:result.secure_url});
}

module.exports = {
    uploadImages
}