const Usuario = require("../models/Usuario");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



exports.crearUsuario = async (req, res, next) => {
  try {

    const passwordEncriptada = await bcrypt.hash(req.body.password, 10);

    const nuevoUsuario = new Usuario({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      email: req.body.email,
      documento: req.body.documento,
      password: passwordEncriptada,
      rol: req.body.rol || "cliente",
      ciudad: req.body.ciudad,
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
    const datosActualizar = { ...req.body };
    if (datosActualizar.password) {
      datosActualizar.password = await bcrypt.hash(datosActualizar.password, 10);
    } else {
      delete datosActualizar.password;
    }

    const usuarioActualizado = await Usuario.findByIdAndUpdate(
      req.params.id,
      datosActualizar,
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

exports.renderEditarUsuario = async (req, res, next) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
      return res.status(404).send("Usuario no encontrado");
    }
    res.render("editar-usuario", { usuario });
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

exports.login = async (req, res, next) => {

  try {

    const { email, password } = req.body;

    // Buscar usuario
    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(401).json({
        error: "Usuario no encontrado"
      });
    }

    // Comparar contraseña
    const passwordCorrecta = await bcrypt.compare(
      password,
      usuario.password
    );

    if (!passwordCorrecta) {
      return res.status(401).json({
        error: "Contraseña incorrecta"
      });
    }

    // Crear token
    const token = jwt.sign(
      {
        id: usuario._id,
        email: usuario.email
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "8h"
      }
    );

    res.json({
      mensaje: "Login exitoso",
      token,
      usuario: {
        nombre: usuario.nombre,
        email: usuario.email
      }
    });

  } catch (error) {
    next(error);
  }
};