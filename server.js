require("dotenv").config();
<<<<<<< HEAD

=======
const mongoose = require("mongoose");
>>>>>>> origin/joaquin-branch
const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 3000;
<<<<<<< HEAD

connectDB();

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
=======

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Conectado a MongoDB");

    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto: ${PORT}`);
    });
})
.catch((error) => {
    console.log("Error conectando MongoDB:", error);
});
>>>>>>> origin/joaquin-branch
