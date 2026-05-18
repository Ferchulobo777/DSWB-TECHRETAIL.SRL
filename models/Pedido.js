const mongoose = require("mongoose");

const pedidoSchema = new mongoose.Schema({
    usuarioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
        required: true
    },

    productos: [
        {
            productoId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Producto"
            },

            cantidad: {
                type: Number,
                default: 1
            }
        }
    ],

    total: {
        type: Number,
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Pedido", pedidoSchema);