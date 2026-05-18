const express = require("express");
const router = express.Router();

const ctrl = require("../controllers/producto.controller");

const validateProducto = require("../middlewares/validateProducto");

router.post("/", validateProducto, ctrl.crearProducto);

router.get("/", ctrl.obtenerProductos);

module.exports = router;