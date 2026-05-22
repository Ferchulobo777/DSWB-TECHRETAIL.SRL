const Tienda = require("../models/Tienda");



exports.crearTienda = async (req, res, next) => {
  try {
    const nuevaTienda = new Tienda({
      nombre: req.body.nombre,
      direccion: req.body.direccion,
    });

    await nuevaTienda.save();
    res.status(201).json(nuevaTienda);
  } catch (error) {
    next(error);
  }
};


exports.obtenerTiendas = async (req, res, next) => {
  try {
    const tiendas = await Tienda.find();
    res.json(tiendas);
  } catch (error) {
    next(error);
  }
};
exports.obtenerTiendaPorId = async (req, res, next) => {
  try {
    const tienda = await Tienda.findById(req.params.id);

    if (!tienda) {
      return res.status(404).json({
        error: "Tienda no encontrada",
      });
    }

    res.json(tienda);
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

exports.actualizarTienda = async (req, res, next) => {
  try {
    const tienda = await Tienda.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!tienda) {
      return res.status(404).json({
        error: "Tienda no encontrada",
      });
    }

    res.json(tienda);
  } catch (error) {
    next(error);
  }
};

exports.eliminarTienda = async (req, res, next) => {
  try {
    const tienda = await Tienda.findByIdAndDelete(req.params.id);

    if (!tienda) {
      return res.status(404).json({
        error: "Tienda no encontrada",
      });
    }

    res.json({
      mensaje: "Tienda eliminada",
    });
  } catch (error) {
    next(error);
  }
};
