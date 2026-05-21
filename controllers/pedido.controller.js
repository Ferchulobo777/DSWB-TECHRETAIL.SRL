const Pedido = require("../models/Pedido");
const Producto = require("../models/Producto");
const Usuario = require("../models/Usuario");


exports.crearPedido = async (req, res, next) => {
  try {
    const { usuarioId, productos } = req.body;

    let detalles = [];
    let total = 0;

    const usuarioExiste = await Usuario.findById(usuarioId);

    if (!usuarioExiste) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    for (const item of productos) {
      const prod = await Producto.findById(item.productoId);

      if (!prod) {
        return res.status(404).json({ error: "Producto no encontrado" });
      }

      if (prod.stock < item.cantidad) {
        return res.status(400).json({ error: "Stock insuficiente" });
      }

      // descontar stock
      prod.stock -= item.cantidad;
      await prod.save();

      detalles.push({
        productoId: prod._id,
        cantidad: item.cantidad,
      });

      total += prod.precio * item.cantidad;
    }

    const nuevoPedido = new Pedido({
      usuarioId,
      productos: detalles,
      total
    });

    await nuevoPedido.save();
    res.status(201).json(nuevoPedido);
  } catch (error) {
    next(error);
  }
};


exports.obtenerPedidos = async (req, res, next) => {
  try {
    const pedidos = await Pedido.find()
      .populate("usuarioId")
      .populate("productos.productoId");

    res.json(pedidos);
  } catch (error) {
    next(error);
  }
};
  
