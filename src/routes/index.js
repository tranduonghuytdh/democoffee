const homeRouter = require('./home')
const productsRouter = require('./products')

function route(app) {

    // [GET] /products
    app.use('/products', productsRouter)

    // [GET] /home
    app.use('/', homeRouter)

}

module.exports = { route }