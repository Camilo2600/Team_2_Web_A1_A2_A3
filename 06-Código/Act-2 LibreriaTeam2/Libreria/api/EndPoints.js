const ClientController = require('../controller/Clients')
const ProductController = require('../controller/Products')
const express = require('express')
const router = express.Router()
// routers de client
router.post("/add",ClientController.createClient)
router.get("/all",ClientController.getClients)
router.put("/updateClient",ClientController.updateSubTotal)
router.delete("/deleteClient", ClientController.deleteClient)
router.get("/buscarPersonaxEdad/:age", ClientController.buscarPersonaxEdad)
router.get("/calcularEdad/:anioNacimiento", ClientController.calcularEdad)

// routers de product
router.post("/crear",ProductController.createProduct)
router.get("/revisar",ProductController.getProducts)
router.put("/actualizar",ProductController.updatePrecio)
router.delete("/borrar",ProductController.deleteProduct)
router.get("/impuesto",ProductController.calcularImpuesto)
router.get("/buscarLibro",ProductController.buscarLibro)
router.get("/ganancia",ProductController.calcularGanancia)
router.get("/descuento",ProductController.calcularDescuento)
router.get("/buscarPrecio",ProductController.buscarPrecio)

// module exports router
module.exports = router