const Pedido = require("../models/pedido.model");
const Producto = require("../models/producto.model");
const Usuario = require("../models/usuario.model");
const BaseController = require("./BaseController");

class PedidoController extends BaseController {

    crearPedido = async (req, res) => {
        try {
            const { usuario, productos } = req.body;

            let total = 0;
            let detalles = [];

            for (let item of productos) {
                const prod = await Producto.findById(item.producto);

                if (!prod) {
                    return this.sendError(res, new Error("Producto no encontrado"), 404);
                }

                if (prod.stock < item.cantidad) {
                    return this.sendError(res, new Error("Stock insuficiente"), 400);
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
            this.sendSuccess(res, pedido, 201);
        } catch (error) {
            this.sendError(res, error);
        }
    }

    obtenerPedidos = async (req, res) => {
        try {
            const pedidos = await Pedido.find()
                .populate("usuario", "nombre email")
                .populate("productos.producto", "nombre precio");

            this.sendSuccess(res, pedidos);
        } catch (error) {
            this.sendError(res, error);
        }
    }
}

module.exports = new PedidoController();
