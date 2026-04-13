const Usuario = require("../models/usuario.model");

exports.crearUsuario = async (req, res) => {
    try {
        const usuario = new Usuario(req.body);
        await usuario.save();
        res.json(usuario);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.obtenerUsuarios = async (req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
}