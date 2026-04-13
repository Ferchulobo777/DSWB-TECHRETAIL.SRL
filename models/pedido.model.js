const mongoose = require("mongoose");

const DetalleSchema = mongoose.Schema({
    producto: {type: mongoose.Schema.Types.ObjectId, ref:"Producto"},
    cantidad: Number,
    precio:   Number
});


const PedidoSchema = mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" },
  productos: [DetalleSchema],
  total: Number,
  estado: { type: String, default: "pendiente" }
})


module.exports = mongoose.model("Pedido", PedidoSchema);