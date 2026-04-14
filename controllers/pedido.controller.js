const Pedido = require("../models/pedido.model");
const Producto = require("../models/producto.model");

exports.crearPedido = async (req, res) => {
  try {
    const { usuario, productos } = req.body;

    let total = 0;
    let detalles = [];

    for (let item of productos) {
      const prod = await Producto.findById(item.producto);

      if (!prod) {
        return res.status(404).json({ error: "Producto no encontrado" });
      }

      if (prod.stock < item.cantidad) {
        return res.status(404).json({ error: "Stock Insuficiente" });
      }

      total += prod.precio * item.cantidad;

      detalles.push({
        producto: prod._id,
        cantidad: item.cantidad,
        precio: prod.precio,
      });

      // descontar stock
      prod.stock -= item.cantidad;
      await prod.save();
    }

    const pedido = new Pedido({
      usuario,
      productos: detalles,
      total,
    });

    await pedido.save();

    res.json(pedido);
  } catch (error) {
    res.status(500).json(error);
  }
};
