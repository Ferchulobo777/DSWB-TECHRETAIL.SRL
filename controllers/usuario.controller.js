const fs = require("fs");

const rutaUsuarios = "./data/usuarios.json";

const leer = (ruta) => JSON.parse(fs.readFileSync(ruta));
const guardar = (ruta, data) =>
  fs.writeFileSync(ruta, JSON.stringify(data, null, 2));



exports.crearUsuario = (req, res) => {
  try {
    const usuarios = leer(rutaUsuarios);

    const nuevoUsuario = {
      id: Date.now(),
      nombre: req.body.nombre,
      email: req.body.email
    };

    usuarios.push(nuevoUsuario);
    guardar(rutaUsuarios, usuarios);

    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(500).json(error);
  }
};


exports.obtenerUsuarios = (req, res) => {
  try {
    const usuarios = leer(rutaUsuarios);
    res.json(usuarios);
  } catch (error) {
    res.status(500).json(error);
  }
};


exports.actualizarUsuario = (req, res) => {
  try {
    let usuarios = leer(rutaUsuarios);

    const index = usuarios.findIndex(u => u.id == req.params.id);

    if (index === -1) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    usuarios[index] = {
      ...usuarios[index],
      ...req.body
    };

    guardar(rutaUsuarios, usuarios);

    res.json(usuarios[index]);
  } catch (error) {
    res.status(500).json(error);
  }
};



exports.eliminarUsuario = (req, res) => {
  try {
    let usuarios = leer(rutaUsuarios);

    const nuevosUsuarios = usuarios.filter(u => u.id != req.params.id);

    if (usuarios.length === nuevosUsuarios.length) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    guardar(rutaUsuarios, nuevosUsuarios);

    res.json({ mensaje: "Usuario eliminado" });
  } catch (error) {
    res.status(500).json(error);
  }
};


exports.renderUsuarios = (req, res) => {
  try {
    const usuarios = leer(rutaUsuarios);
    res.render("usuarios", { usuarios });
  } catch (error) {
    res.status(500).json(error);
  }
};