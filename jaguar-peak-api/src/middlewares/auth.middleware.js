const { verificarToken } = require('../utils/jwt');
const { errorResponse } = require('../utils/response');

const validarJWT = (req, res, next) => {
    const token = req.header('x-token');

    if (!token) {
        return errorResponse(res, 'Token no proporcionado', 401);
    }

    try {
        const payload = verificarToken(token);
        req.usuario = payload;
        next();
    } catch (error) {
        return errorResponse(res, 'Token inválido o expirado', 401);
    }
};

module.exports = { validarJWT };