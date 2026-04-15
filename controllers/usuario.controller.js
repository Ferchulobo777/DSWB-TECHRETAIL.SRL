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

exports.actualizarUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(usuario);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

exports.eliminarUsuario = async (req, res) => {
    try {
        await Usuario.findByIdAndDelete(req.params.id);
        res.json({ mensaje: "Usuario eliminado" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

