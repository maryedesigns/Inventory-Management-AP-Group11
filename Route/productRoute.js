const express = require('express');
const productController = require('../controller/productController');
const auth = require('../middleware/authController')

const Router = express.Router();
Router.use(express.urlencoded({ extended: true }))
Router.use(express.json())

Router.post('/',auth,productController.addProduct);
Router.get('/',auth,productController.getProducts);
Router.get('/:id',auth,productController.getSingleProduct);


module.exports = Router;



