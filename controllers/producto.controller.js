const fs = require("fs");

const rutaProductos = "./data/productos.json";

const leer = (ruta) => JSON.parse(fs.readFileSync(ruta));
const guardar = (ruta, data) =>
  fs.writeFileSync(ruta, JSON.stringify(data, null, 2));


exports.crearProducto = (req, res) => {
  try {
    const productos = leer(rutaProductos);

    const nuevoProducto = {
      id: Date.now(),
      nombre: req.body.nombre,
      precio: req.body.precio,
      stock: req.body.stock
    };

    productos.push(nuevoProducto);
    guardar(rutaProductos, productos);

    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(500).json(error);
  }
};



exports.obtenerProductos = (req, res) => {
  try {
    const productos = leer(rutaProductos);
    res.json(productos);
  } catch (error) {
    res.status(500).json(error);
  }
};


exports.renderProductos = (req, res) => {
  try {
    const productos = leer(rutaProductos);
    res.render("productos", { productos });
  } catch (error) {
    res.status(500).json(error);
  }
};