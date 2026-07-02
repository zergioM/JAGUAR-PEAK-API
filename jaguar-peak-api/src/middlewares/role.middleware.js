const { errorResponse } = require('../utils/response');

const esAdminRole = (req, res, next) => {
    if (!req.usuario || req.usuario.rol !== 'admin') {
        return errorResponse(res, 'Se requiere rol de administrador', 403);
    }
    next();
};

module.exports = { esAdminRole };
