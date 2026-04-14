const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const usuarioRoutes = require("./routes/usuario.routes");
const productoRoutes = require("./routes/producto.routes");
const pedidoRoutes = require("./routes/pedido.routes");

app.use("/usuarios", usuarioRoutes);
app.use("/productos", productoRoutes);
app.use("/pedidos", pedidoRoutes);


module.exports = app;
