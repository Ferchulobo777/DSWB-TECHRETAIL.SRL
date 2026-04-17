const Usuario = require("../models/usuario.model");
const BaseController = require("./BaseController");

class UsuarioController extends BaseController {
    
    crearUsuario = async (req, res) => {
        try {
            const usuario = new Usuario(req.body);
            await usuario.save();
            this.sendSuccess(res, usuario, 201);
        } catch (error) {
            this.sendError(res, error);
        }
    }

    obtenerUsuarios = async (req, res) => {
        try {
            const usuarios = await Usuario.find();
            this.sendSuccess(res, usuarios);
        } catch (error) {
            this.sendError(res, error);
        }
    }

    actualizarUsuario = async (req, res) => {
        try {
            const usuario = await Usuario.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            if (!usuario) {
                return this.sendError(res, new Error("Usuario no encontrado"), 404);
            }
            this.sendSuccess(res, usuario);
        } catch (error) {
            this.sendError(res, error);
        }
    }

    eliminarUsuario = async (req, res) => {
        try {
            const usuario = await Usuario.findByIdAndDelete(req.params.id);
            if (!usuario) {
                return this.sendError(res, new Error("Usuario no encontrado"), 404);
            }
            this.sendSuccess(res, { mensaje: "Usuario eliminado" });
        } catch (error) {
            this.sendError(res, error);
        }
    }

    renderUsuarios = async (req, res) => {
        try {
            const usuarios = await Usuario.find();
            this.renderView(res, 'usuarios', { usuarios });
        } catch (error) {
            this.sendError(res, error);
        }
    }
}

module.exports = new UsuarioController();
