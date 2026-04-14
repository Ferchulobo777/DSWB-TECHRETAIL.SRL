const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://vaneara_db:0986Gael..@vaneara.y59c7ia.mongodb.net/tp_back');
    console.log('Mongo conectado');
  } catch (error) {
    console.error('Error:', error);
  }
};

module.exports = connectDB;

