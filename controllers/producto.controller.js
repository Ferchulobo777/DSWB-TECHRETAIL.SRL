const Producto = require("../models/Producto");





exports.crearProducto =  async (req, res, next) => {
  try {
    const nuevoProducto = new Producto({
      nombre: req.body.nombre,
      precio: req.body.precio,
      stock: req.body.stock
    });

    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
  } catch (error) {
    next(error);
  }
};


exports.obtenerProductos = async (req, res, next) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    next(error);
  }
};


exports.renderProductos = async  (req, res, next) => {
  try {
    const productos = await Producto.find();
    res.render("productos", { productos });
  } catch (error) {
    next(error);
  }
};