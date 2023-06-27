//const mongodb = require('mongodb')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    nombre: {type: String},
    descripcion: {type: String},
    precio: {type: Number},
    opcion: {type: String}
})

module.exports = Product = mongoose.model('Product', ProductSchema)