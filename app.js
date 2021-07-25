require('dotenv').config()
const express = require('express');
const userRoute = require('./Route/userRoute')



const app = express();



app.use('/users',userRoute)

PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running at 127.0.0.1:${PORT}`);
})
