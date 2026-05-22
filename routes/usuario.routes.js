const express = require("express");
const router = express.Router();

const validateUsuario = require("../middlewares/validateUsuario");
const ctrl = require("../controllers/usuario.controller");


router.post("/login", ctrl.login);
router.post("/", validateUsuario, ctrl.crearUsuario);
router.get("/", ctrl.obtenerUsuarios);
router.get("/:id", ctrl.obtenerUsuarioPorId);
router.put('/:id', ctrl.actualizarUsuario);
router.delete('/:id', ctrl.eliminarUsuario);

module.exports = router;