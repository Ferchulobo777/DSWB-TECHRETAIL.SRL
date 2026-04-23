const express = require('express');
const router = express.Router();

const productoCtrl = require('../controllers/producto.controller');
const usuarioCtrl = require('../controllers/usuario.controller');
const tiendaCtrl = require("../controllers/tienda.controller");

// Dashboard / Home
router.get('/', (req, res) => {
    res.render('index');
});

// Vistas de Datos
router.get('/productos', productoCtrl.renderProductos);
router.get('/usuarios', usuarioCtrl.renderUsuarios);
router.get('/tiendas', tiendaCtrl.renderTiendas);



module.exports = router;
