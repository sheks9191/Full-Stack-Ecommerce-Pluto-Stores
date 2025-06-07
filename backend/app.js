require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();
const cors = require('cors');

const corsOptions ={
    // origin:'https://pluto-store.onrender.com', 
    credentials:true,            
    optionSuccessStatus:200
}

//...............................................
const morgan = require('morgan');
const cloudinary = require('cloudinary').v2
cloudinary.config({
  cloud_name:process.env.CLOUD_NAME,
  api_key:process.env.CLOUD_KEY,
  api_secret:process.env.CLOUD_SECRET,
})
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize')



//...............................................
const connectDB = require('./db/connect');

//...............................................

const authRouter = require('./routes/auth')
const cartRouter = require('./routes/cart')
const userRouter = require('./routes/user')
const orderRouter = require('./routes/orders')
const productsRouter = require('./routes/products')
const reviewsRouter = require('./routes/review')
const wishlistsRouter = require('./routes/wishlists')

//...............................................
const notFoundMiddleWare = require('./middleware/not-found')

const errorHandlerMiddleWare = require('./middleware/error-handler')

//...............................................
app.set('trust proxy', 1);
app.use(rateLimit({
  windowMs:15 * 60 * 1000,
  max:100,
}));
app.use(helmet())
app.use(xss())
app.use(mongoSanitize())


app.use(morgan('tiny'));
app.use(cors());
app.use(express.static('./public'));
app.use(express.json());
app.use(fileUpload({useTempFiles:true}));
app.use(cookieParser(process.env.JWT_SECRET));


app.get('/', (req,res) => {
    res.send('Jewelry API')
})

app.use('/api/v2/auth', authRouter);
app.use('/api/v2/cart', cartRouter);
app.use('/api/v2/orders', orderRouter);
app.use('/api/v2/users', userRouter);
app.use('/api/v2/products', productsRouter);
app.use('/api/v2/reviews', reviewsRouter);
app.use('/api/v2/wishlists',wishlistsRouter)

app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleWare);




const port = process.env.PORT || 5000

const start = async () => {

     try {

       await connectDB(process.env.MONGO_URI);

       app.listen(port, console.log(`Server is listening on port ${port}...`)) 
     } catch (error) {
        console.log(error);
     }
};


start();
