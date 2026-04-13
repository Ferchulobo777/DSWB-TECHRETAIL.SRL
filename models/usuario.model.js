const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    documento: {type:String, required: true},
    email: { type: String, required: true},
    rol: {type: String, default: "cliente"}
})


module.exports = mongoose.model("Usuarios", UsuarioSchema);