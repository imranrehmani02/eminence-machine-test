const router = require('express').Router();
const { check } = require('express-validator');
const auth = require('../core/auth');
const bodyParser = require('body-parser');
const productController = require('../controller/products.controller');

//middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/fetch',
    auth,
    productController.fetchProducts);

module.exports = router;
