const validateProducto = (req, res, next) => {

    const { nombre, precio, stock } = req.body;

    if (!nombre) {
        return res.status(400).json({
            error: "Nombre obligatorio"
        });
    }

    if (precio <= 0) {
        return res.status(400).json({
            error: "Precio inválido"
        });
    }

    if (stock < 0) {
        return res.status(400).json({
            error: "Stock inválido"
        });
    }

    next();
};

module.exports = validateProducto;