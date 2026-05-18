const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },

    precio: {
        type: Number,
        required: true
    },

    tiendaId: {
   type: mongoose.Schema.Types.ObjectId,
   ref: "Tienda"
}
});

module.exports = mongoose.model("Producto", productoSchema);