const Tienda = require("../models/Tienda");



exports.crearTienda = async (req, res, next) => {
  try {
    const tiendas = leer(rutaTiendas);

    const nuevaTienda = new Tienda({
      nombre: req.body.nombre,
      direccion: req.body.direccion
    });

    await nuevaTienda.save();
    res.status(201).json(nuevaTienda);
  } catch (error) {
    next(error);
  }
};


exports.obtenerTienda = async (req, res, next) => {
  try {
    const tiendas = await Tienda.find();
    res.json(tiendas);
  } catch (error) {
    next(error);
  }
};

exports.renderTiendas = async (req, res, next) => {
  try {
    const tiendas = await Tienda.find();
    res.render("tiendas", { tiendas });
  } catch (error) {
    next(error);
  }
};