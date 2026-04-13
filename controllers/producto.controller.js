const Producto = require("../models/producto.model");

exports.crearProducto = async (req, res) => {
  const producto = new Producto(req.body);
  await producto.save();
  res.json(producto);
};



exports.obtenerProductos = async (req, res) => {
    const productos = await Producto.find();
    res.json(productos);
}