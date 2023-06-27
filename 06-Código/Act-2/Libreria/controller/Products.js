const { json } = require('express')
const Product = require('../model/Product')

const createProduct = (req, res) => {
    let product = new Product({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        opcion: req.body.opcion
    })

    product.save((err, prod) => {
        err && res.status(500).json(err, message)
        res.status(200).json(prod)
    })
}

    const getProducts = (req, res) => {
        Product.find((err, products) => {
            err && res.status(500).send(err.message)
            res.status(200).json(products)
        })
    }

    const deleteProduct = (req, res) => {
        Product.findOneAndDelete({nombre: req.body.nombre}, (err , prod) => {
            err && res.status(501).send(err.message)
            res.status(200).send(prod)
        })
    }   

    const calcularImpuesto = function(req, res) {
        var nombre = req.body.nombre  
        var precio = req.body.precio
        var precioNeto = precio /1.12
        var iva = precioNeto * 0.12
        console.log(iva)
        res.status(200).send("El nombre del libro es: " + nombre + "\n El precio es " + precio + 
                              "\n Y el Iva es  : " + iva )



    }

    const updatePrecio = (req, res) => {
        Product.findOneAndUpdate({nombre: req.body.nombre},{precio: req.body.precio}, (err, prod)=>{
            err && res.status(500).send(err.message)
            res.status(200).send(prod)
        })
    }

    const buscarLibro = function(req, res) {
        Product.find({nombre: req.body.nombre}, function(err, products){
                err && res.status(500).send(err.message)
                res.status(200).json(products)
        })
    }

    const calcularGanancia = function(req, res) {

        var nombre = req.body.nombre     
        var precio = req.body.precio
        var ganancia = precio * 0.7
        console.log(ganancia)
        res.status(200).send("El nombre del libro es: " + nombre + "\n El precio es " + precio + 
                              "\n Y la ganancia es : " + ganancia)


    }

    const calcularDescuento = function(req, res) {

        var nombre = req.body.nombre     
        var precio = req.body.precio
        var descuento = precio * 0.1
        console.log(descuento)
        res.status(200).send("El nombre del libro es: " + nombre + "\n El precio es " + precio + 
                              "\n Y el descuento es : " + descuento)


    }


    const buscarPrecio = function(req, res) {
        Product.find({precio: req.body.precio}, function(err, products){
         
                err && res.status(500).send(err.message)
                res.status(200).json(products)
        })
    }
 
//Exportamos el metodo creado

module.exports = {createProduct, getProducts, updatePrecio,deleteProduct, calcularImpuesto, buscarLibro, 
                    calcularGanancia, calcularDescuento, buscarPrecio} //Exportamos el metodo creado