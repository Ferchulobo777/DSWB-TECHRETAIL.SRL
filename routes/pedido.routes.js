const express = require("express");
const router = express.Router();

const ctrl = require("../controllers/pedido.controller");
const validatePedido = require("../middlewares/validatePedido");


router.post("/", validatePedido, ctrl.crearPedido);
router.get("/", ctrl.obtenerPedidos);
router.get("/:id", ctrl.obtenerPedidoPorId);
router.put("/:id", validatePedido, ctrl.actualizarPedido);
router.delete("/:id", ctrl.eliminarPedido);

module.exports = router;