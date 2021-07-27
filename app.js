require('dotenv').config()
const express = require('express');

const userRoute = require('./Route/userRoute')
const productRoute = require('./Route/productRoute')
const app = express();

PORT = process.env.PORT;

//mounting users routes
app.use('/users', userRoute);
app.use('/products', productRoute);
//connecting and listening to server 
app.listen(PORT, () => {
    console.log(`Server running at 127.0.0.1:${PORT}`);
});
