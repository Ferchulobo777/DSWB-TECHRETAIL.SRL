const express = require('express');
const router = express.Router();

const productoCtrl = require('../controllers/producto.controller');
const usuarioCtrl = require('../controllers/usuario.controller');

// Dashboard / Home
router.get('/', (req, res) => {
    res.render('index');
});

// Vistas de Datos
router.get('/productos', productoCtrl.renderProductos);
router.get('/usuarios', usuarioCtrl.renderUsuarios);

// Agregaremos tiendas después si es necesario
router.get('/tiendas', (req, res) => {
    res.render('index'); // Placeholder
});

module.exports = router;
