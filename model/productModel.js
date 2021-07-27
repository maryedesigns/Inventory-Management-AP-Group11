const mongoose = require('../utils/database')


const productSchema = mongoose.Schema({
    brandName: { type: String, required: true },
    model: { type: String, required: true },
    description: { type: String, required: false },
    engineType: { type: String, required: false },
    categories:{ type: String, required: true },
    mileage: { type: String, required: false },
    price: { type: String, required: true },
    year: { type: String, required: false }, 
    imageUrl: {type: String, required: true},
    numberInStock: {type:Number, required: true},
    userid: { type:mongoose.Schema.Types.ObjectId,ref:'users',required:true },
});

const Product = mongoose.model('Product', productSchema)

module.exports = Product;