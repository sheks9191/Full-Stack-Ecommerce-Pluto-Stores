require('dotenv').config();

const productsData = require('./products.json')
const Product = require('./models/Products')

const connectDB = require('./db/connect');


const start = async () => {
    try {
       await connectDB(process.env.MONGO_URI) ;
       await Product.create(productsData);
       console.log('Success!!!');
       process.exit(0)
    } catch (error) {
       console.log(error);
       process.exit(1)
    }
}


start();