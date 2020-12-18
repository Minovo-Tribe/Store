const express = require('express');
const brand = require('../controller/filter/brand.controller');
const product = require('../controller/product.controller');
const category = require('../controller/filter/category.controller');

const router = express.Router();

router.post('/brand', brand.postBrand);
router.get('/brand', brand.getBrand);

router.post('/category', category.postCategory);
router.get('/category', category.getCategory);

router.get('/products/:id', product.getProduct);
router.get('/products/all', product.getAllProducts);
router.post('/products', product.addProduct);
router.get('/products', product.getProducts);

module.exports = router;
