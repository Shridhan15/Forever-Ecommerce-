import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
 // app config
const app = express();
const PORT = process.env.PORT || 4000;

connectDB();
connectCloudinary();
// middleware
app.use(express.json());
app.use(cors());

//api endpoints
app.get('/', (req, res) => {
    res.send('API Working !');
});
app.use('/api/user',userRouter)
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order',orderRouter)

// start the server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})
