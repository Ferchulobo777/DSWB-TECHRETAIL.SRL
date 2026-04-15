const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/tienda.controller');

// rutas
router.post('/', ctrl.crearTienda);
router.get('/', ctrl.obtenerTienda);

module.exports = router;