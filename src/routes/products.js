const express = require('express')
const router = express.Router()
const productsController = require('../app/controller/ProductsController')

router.get('/create', productsController.create)

router.post('/store', productsController.store)

router.get('/:slug', productsController.details)

router.get('/', productsController.products)

module.exports = router