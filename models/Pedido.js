const mongoose = require("mongoose");

const pedidoSchema = new mongoose.Schema({
    numeroOrden: {
        type: Number,
    },
    usuarioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
        required: true
    },
    tiendaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tienda",
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
    fecha: {
        type: Date,
        default: Date.now,
    },
    total: {
        type: Number,
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Pedido", pedidoSchema);