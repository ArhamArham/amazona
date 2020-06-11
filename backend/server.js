import express from 'express'
import dotenv from 'dotenv'
import path from 'path';
import config from './config'
import mongoose from 'mongoose'
import userRoutes from './routes/userRoutes'
import productRoutes from './routes/productRoutes'
import orderRoutes from './routes/orderRoutes'
import bodyParser from 'body-parser'

dotenv.config();
const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason))

const app = express()
app.use(bodyParser.json())

app.use("/api/products", productRoutes)
app.use("/api/users", userRoutes)
app.use('/api/orders', orderRoutes);
app.get('/api/config/paypal', (req, res) => {
    res.send(config.PAYPAL_CLIENT_ID);
});

app.use(express.static(path.join(__dirname, '/../frontend/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
});
app.listen(config.PORT, () => {
    console.log('Server started at http://localhost:5000');

})