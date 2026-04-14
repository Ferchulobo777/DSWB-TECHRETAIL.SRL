console.log('Arrancando app...');

const express = require('express');
const connectDB = require('./config/db');

const app = express();

// conectar a Mongo
connectDB();

app.use(express.json());

// ruta de prueba
app.get('/', (req, res) => {
  res.send('API funcionando');
});

// levantar servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});