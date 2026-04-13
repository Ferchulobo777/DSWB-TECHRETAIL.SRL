const express = require("express");
const router = express.Router();


const ctrl = require("../controllers/producto.controller");


router.post("/", ctrl.crearProducto);
router.get("/", ctrl.obtenerProductos);

module.exports = router;