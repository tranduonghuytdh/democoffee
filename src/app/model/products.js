const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema
mongoose.plugin(slug)

const Products = new Schema({

    image: { type: String, require: true },
    name: { type: String, require: true },
    price: { type: String, require: true },
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true
});

module.exports = mongoose.model('products', Products)