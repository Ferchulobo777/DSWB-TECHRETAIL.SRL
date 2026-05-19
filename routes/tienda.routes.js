const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/tienda.controller');
const validateTienda = require("../middlewares/validateTienda");

// rutas
router.post("/", validateTienda, ctrl.crearTienda);
router.get("/", ctrl.obtenerTiendas);
router.get("/:id", ctrl.obtenerTiendaPorId);
router.put("/:id", validateTienda, ctrl.actualizarTienda);
router.delete("/:id", ctrl.eliminarTienda);

module.exports = router;