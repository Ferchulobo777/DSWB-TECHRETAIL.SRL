const fs = require("fs");

const rutaPedidos = "./data/pedidos.json";
const rutaProductos = "./data/productos.json";
const rutaUsuarios = "./data/usuarios.json";

const leer = (ruta) => JSON.parse(fs.readFileSync(ruta));
const guardar = (ruta, data) =>
  fs.writeFileSync(ruta, JSON.stringify(data, null, 2));


exports.crearPedido = (req, res) => {
  try {
    const { usuarioId, productos } = req.body;

    let pedidos = leer(rutaPedidos);
    let productosDB = leer(rutaProductos);
    let usuarios = leer(rutaUsuarios);


    let total = 0;
    let detalles = [];

    for (let item of productos) {
      const prod = productosDB.find(p => p.id == item.productoId);

      if (!prod) {
        return res.status(404).json({ error: "Producto no encontrado" });
      }

      if (prod.stock < item.cantidad) {
        return res.status(404).json({ error: "Stock Insuficiente" });
      }

      total += prod.precio * item.cantidad;

      detalles.push({
        producto: prod.id,
        cantidad: item.cantidad,
        precio: prod.precio,
      });

      // descontar stock
      prod.stock -= item.cantidad;
    }
      guardar(rutaProductos, productosDB);
    

    const nuevoPedido = {
      id: Date.now(),
      usuarioId,
      productos: detalles,
      total,
    };

    pedidos.push(nuevoPedido);
    guardar(rutaPedidos, pedidos);

    res.json(nuevoPedido);
  } catch (error) {
    res.status(500).json(error);
  }
};


exports.obtenerPedidos = (req, res) => {
  try {

    const pedidos = leer(rutaPedidos);
    const usuarios = leer(rutaUsuarios);
    const productos = leer(rutaProductos);

    const resultado = pedidos.map(p => {
      const usuario = usuarios.find(u => u.id == p.usuarioId);

    const productosDetallados = p.productos.map(item => {
      const prod = productos.find(pr => pr.id == item.productoId);

    return {
          ...item,
          producto: prod
        };
      });

      return {
        ...p,
        usuario,
        productos: productosDetallados
      };
    });


    res.json(resultado);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
