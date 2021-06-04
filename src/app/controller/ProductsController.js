const Products = require('../model/products')
const { mutipleMongosseToObject } = require('../../utils/mongoose')
const { mongooseToObject } = require('../../utils/mongoose')

class ProductsController {

    // [GET] /products
    products(req, res, next) {
        Products.find({})
            .then(products => {
                res.render('products', { products: mutipleMongosseToObject(products) })
            })
            .catch(next)
    }

    // [GET] /products/:slug
    details(req, res, next) {
        // res.send('hihi ---- ' + req.params.slug)
        Products.findOne({ slug: req.params.slug })
            .then(products => {
                res.render('detailsproducts/details', {
                    products: mongooseToObject(products)
                })
            })
            .catch(next)
    }

    // [GET] /products/create
    create(req, res, next) {
        res.render('detailsproducts/create')
    }

    // [POST] /products/store
    store(req, res, next) {
        const formData = req.body
        const products = new Products(formData)
        products.save(formData)
            .then(() => res.redirect(`/products`))
            .catch(error => { })
    }

}

module.exports = new ProductsController