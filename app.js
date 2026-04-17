require('dotenv').config();
console.log('Arrancando app...');

const express = require('express');
const app = express();

app.use(express.json());

const usuarioRoutes = require('./routes/usuario.routes');
console.log("Cargando rutas de usuarios...");
app.use('/usuarios', usuarioRoutes);

const tiendaRoutes = require('./routes/tienda.routes');
app.use('/tiendas', tiendaRoutes);


// ruta de prueba
app.get('/', (req, res) => {
  res.send('API funcionando');
});

module.exports = app;

