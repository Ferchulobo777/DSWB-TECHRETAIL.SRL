const Tienda = require("../models/tienda.model");
const BaseController = require("./BaseController");

class TiendaController extends BaseController {
    
    crearTienda = async (req, res) => {
        try {
            const tienda = new Tienda(req.body);
            await tienda.save();
            this.sendSuccess(res, tienda, 201);
        } catch (error) {
            this.sendError(res, error);
        }
    }

    obtenerTienda = async (req, res) => {
        try {
            const tiendas = await Tienda.find();
            this.sendSuccess(res, tiendas);
        } catch (error) {
            this.sendError(res, error);
        }
    }
}

module.exports = new TiendaController();
