const express = require("express");
const router = express.Router();


const ctrl = require("../controllers/usuario.controller");


router.post("/", ctrl.crearUsuario);
router.get("/", ctrl.obtenerUsuarios);

module.exports = router;