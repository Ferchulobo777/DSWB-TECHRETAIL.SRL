const Usuario = require("../models/Usuario");




exports.crearUsuario = async (req, res) => {
  try {

    const nuevoUsuario = new Usuario({
      nombre: req.body.nombre,
      email: req.body.email
  });

   await nuevoUsuario.save();

    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error del servidor"
    });
  }
};


exports.obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
     console.log(error);
    res.status(500).json({
      error: "Error del servidor"
    });
  }
};


exports.actualizarUsuario = async (req, res) => {
  try {
     const usuarioActualizado = await Usuario.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!usuarioActualizado) {
      return res.status(404).json({
        error: "Usuario no encontrado"
      });
    }


     res.json(usuarioActualizado);
     } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error del servidor"
    });
  }
};



exports.eliminarUsuario = async (req, res) => {
  try {
    const usuarioEliminado = await Usuario.findByIdAndDelete(req.params.id);

    if (!usuarioEliminado) {
      return res.status(404).json({
        error: "Usuario no encontrado"
      });
    }

    res.json({ mensaje: "Usuario eliminado" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error del servidor"
    });
  }
};


exports.renderUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.render("usuarios", { usuarios });
  } catch (error) {
     console.log(error);
    res.status(500).json({
      error: "Error del servidor"
    });
  }
};