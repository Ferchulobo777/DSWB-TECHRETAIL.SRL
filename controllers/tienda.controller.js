const Tienda = require("../models/tiendas");
const fs = require("fs");

const rutaTiendas = "./data/tiendas.json";

const leer = (ruta) => JSON.parse(fs.readFileSync(ruta));
const guardar = (ruta, data) =>
  fs.writeFileSync(ruta, JSON.stringify(data, null, 2));



exports.crearTienda = (req, res) => {
  try {
    const tiendas = leer(rutaTiendas);

    const nuevaTienda = new Tienda(
      Date.now(),
      req.body.nombre,
      req.body.direccion
    );

    tiendas.push(nuevaTienda);
    guardar(rutaTiendas, tiendas);

    res.status(201).json(nuevaTienda);
  } catch (error) {
    res.status(500).json(error);
  }
};


exports.obtenerTienda = (req, res) => {
  try {
    const tiendas = leer(rutaTiendas);
    res.json(tiendas);
  } catch (error) {
    res.status(500).json(error);
  }
};

  exports.renderTiendas = (req, res) => {
  try {
    const tiendas = leer(rutaTiendas);
    res.render("tiendas", { tiendas });
  } catch (error) {
    res.status(500).json(error);
  }

};