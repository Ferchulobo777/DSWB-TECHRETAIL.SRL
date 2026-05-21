const Producto = require("../models/Producto");

<<<<<<< HEAD
exports.crearProducto = async (req, res, next) => {
=======




exports.crearProducto =  async (req, res, next) => {
>>>>>>> origin/joaquin-branch
  try {
    const nuevoProducto = new Producto({
      nombre: req.body.nombre,
      precio: req.body.precio,
<<<<<<< HEAD
      stock: req.body.stock,
    });
    await nuevoProducto.save();
=======
      stock: req.body.stock
    });
>>>>>>> origin/joaquin-branch

    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
  } catch (error) {
<<<<<<< HEAD
    next(error)
  }
};

=======
    next(error);
  }
};


>>>>>>> origin/joaquin-branch
exports.obtenerProductos = async (req, res, next) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
<<<<<<< HEAD
    next(error)
=======
    next(error);
>>>>>>> origin/joaquin-branch
  }
};

exports.obtenerProductoPorId = async (req, res, next) => {

<<<<<<< HEAD
    try {

        const producto = await Producto.findById(req.params.id);

        if (!producto) {
            return res.status(404).json({
                error: "Producto no encontrado"
            });
        }

        res.json(producto);

    } catch (error) {

        next(error);

    }
};

exports.renderProductos = async (req, res, next) => {
=======
exports.renderProductos = async  (req, res, next) => {
>>>>>>> origin/joaquin-branch
  try {
    const productos = await Producto.find();
    res.render("productos", { productos });
  } catch (error) {
<<<<<<< HEAD
    next(error)
    
=======
    next(error);
>>>>>>> origin/joaquin-branch
  }
}

exports.actualizarProducto = async (req, res, next) => {
  try {
    const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!producto) {
      return res.status(404).json({
        error: "Producto no encontrado",
      });
    }

    res.json(producto);
  } catch (error) {
    next(error);
  }
};

exports.eliminarProducto = async (req, res, next) => {

    try {

        const producto = await Producto.findByIdAndDelete(req.params.id);

        if (!producto) {
            return res.status(404).json({
                error: "Producto no encontrado"
            });
        }

        res.json({
            mensaje: "Producto eliminado"
        });

    } catch (error) {

        next(error);

    }
};