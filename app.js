require('dotenv').config();
console.log('Arrancando app...');

const express = require('express');
const connectDB = require('./config/db');

const app = express();

app.use(express.json());

const usuarioRoutes = require('./routes/usuario.routes');
console.log("Cargando rutas de usuarios...");
app.use('/usuarios', usuarioRoutes);

// ruta de prueba
app.get('/', (req, res) => {
  res.send('API funcionando');
});

module.exports = app;

