const Usuario = require("../models/usuario.model");

exports.crearUsuario = async (req, res) => {
    try {
        const usuario = new Usuario(req.body);
        await usuario.save();
        res.json(usuario);
    } catch (error) {
        console.log("ERROR:", error);
        res.status(500).json(error);
    }
}

exports.obtenerUsuarios = async (req, res) => {
      try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) {
        console.log("ERROR:", error);
        res.status(500).json({ error: error.message });
    }
}
