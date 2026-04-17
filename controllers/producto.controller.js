const Producto = require("../models/producto.model");
const BaseController = require("./BaseController");

class ProductoController extends BaseController {
    
    crearProducto = async (req, res) => {
        try {
            const producto = new Producto(req.body);
            await producto.save();
            this.sendSuccess(res, producto, 201);
        } catch (error) {
            this.sendError(res, error);
        }
    }

    obtenerProductos = async (req, res) => {
        try {
            const productos = await Producto.find();
            this.sendSuccess(res, productos);
        } catch (error) {
            this.sendError(res, error);
        }
    }

    renderProductos = async (req, res) => {
        try {
            const productos = await Producto.find();
            this.renderView(res, 'productos', { productos });
        } catch (error) {
            this.sendError(res, error);
        }
    }
}

module.exports = new ProductoController();