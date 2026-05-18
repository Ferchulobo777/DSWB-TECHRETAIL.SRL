const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/tienda.controller');
const validateTienda = require("../middlewares/validateTienda");

// rutas
router.post('/', validateTienda, ctrl.crearTienda);
router.get('/', ctrl.obtenerTienda);

module.exports = router;