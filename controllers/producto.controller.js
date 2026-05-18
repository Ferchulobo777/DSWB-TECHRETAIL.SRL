const Producto = require("../models/Producto");





exports.crearProducto =  async (req, res) => {
  try {
    
    const nuevoProducto = new Producto({
    nombre: req.body.nombre,
    precio: req.body.precio,
    stock: req.body.stock
    });
    await nuevoProducto.save();
  

    res.status(201).json(nuevoProducto);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error del servidor"
    });
  }
};



exports.obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error del servidor"
    });
  }
};


exports.renderProductos = async  (req, res) => {
  try {
    const productos = await Producto.find();
    res.render("productos", { productos });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error del servidor"
    });
  }
};