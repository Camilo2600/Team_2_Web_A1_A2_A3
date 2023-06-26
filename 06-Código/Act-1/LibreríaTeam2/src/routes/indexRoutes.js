import { Router } from "express";
import Productos from "../models/Productos";
import { createProductos, deleteProductos, renderEditProducto, renderProductos, statusProductos, updateProductos, iva } from "../controllers/productoController";

const router = Router();



router.get("/update", (req, res)=> {
   res.render("venta");
});



//router.get("/update", iva);

router.get("/", renderProductos);

router.post("/libros/agregar", createProductos);

router.get("/update/:id", renderEditProducto);

router.post("/update/:id", updateProductos);

router.get("/delete/:id", deleteProductos);

router.get("/status/:id", statusProductos);

export default router;
