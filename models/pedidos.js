class Pedido {
  constructor(id, usuarioId, productos, total) {
    this.id = id;
    this.usuarioId = usuarioId;
    this.productos = productos; //array de productos
    this.total = total;
  }
}

module.exports = Pedido;