exports.crearTienda = async (req, res) => {
    try {
        const tienda = new Tienda(req.body);
        await tienda.save();
        res.json(tienda);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.obtenerTienda = (req, res) => {
  res.json([]);
};

