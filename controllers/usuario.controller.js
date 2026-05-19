const Usuario = require("../models/Usuario");

exports.crearUsuario = async (req, res, next) => {
  try {
    const nuevoUsuario = new Usuario({
      nombre: req.body.nombre,
      email: req.body.email,
    });

    await nuevoUsuario.save();

    res.status(201).json(nuevoUsuario);
  } catch (error) {
    next(error);
  }
};

exports.obtenerUsuarios = async (req, res, next) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    next(error);
  }
};
exports.obtenerUsuarioPorId = async (req, res, next) => {
  try {
    const usuario = await Usuario.findById(req.params.id);

    if (!usuario) {
      return res.status(404).json({
        error: "Usuario no encontrado",
      });
    }

    res.json(usuario);
  } catch (error) {
    next(error);
  }
};

exports.actualizarUsuario = async (req, res, next) => {
  try {
    const usuarioActualizado = await Usuario.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );

    if (!usuarioActualizado) {
      return res.status(404).json({
        error: "Usuario no encontrado",
      });
    }

    res.json(usuarioActualizado);
  } catch (error) {
    next(error);
  }
};

exports.eliminarUsuario = async (req, res, next) => {
  try {
    const usuarioEliminado = await Usuario.findByIdAndDelete(req.params.id);

    if (!usuarioEliminado) {
      return res.status(404).json({
        error: "Usuario no encontrado",
      });
    }

    res.json({ mensaje: "Usuario eliminado" });
  } catch (error) {
    next(error);
  }
};

exports.renderUsuarios = async (req, res, next) => {
  try {
    const usuarios = await Usuario.find();
    res.render("usuarios", { usuarios });
  } catch (error) {
    next(error);
  }
};
