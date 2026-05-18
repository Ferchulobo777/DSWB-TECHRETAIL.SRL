const Tienda = require("../models/Tienda");



exports.crearTienda = async (req, res) => {
  try {
    const tiendas = leer(rutaTiendas);

    const nuevaTienda = new Tienda({
      nombre: req.body.nombre,
      direccion: req.body.direccion
    });

    await nuevaTienda.save();

    res.status(201).json(nuevaTienda);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error del servidor"
    });
  }
};


exports.obtenerTienda = async (req, res) => {
  try {
    const tiendas = await Tienda.find();
    res.json(tiendas);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error del servidor"
    });
  }
};

  exports.renderTiendas = async (req, res) => {
  try {
    const tiendas = await Tienda.find();
    res.render("tiendas", { tiendas });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error del servidor"
    });
  }
};