const express = require("express");
const router = express.Router();

const ctrl = require("../controllers/pedido.controller");

router.post("/", ctrl.crearPedido);
router.get("/", ctrl.obtenerPedidos);

module.exports = router;