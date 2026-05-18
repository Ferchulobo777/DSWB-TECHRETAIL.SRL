const validateUsuario = (req, res, next) => {

    const { nombre, email } = req.body;

    if (!nombre || !email) {
        return res.status(400).json({
            error: "Nombre y email obligatorios"
        });
    }

    next();
};

module.exports = validateUsuario;