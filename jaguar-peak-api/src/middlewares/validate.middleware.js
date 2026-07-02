const { validationResult } = require('express-validator');
const { errorResponse } = require('../utils/response');

const validarCampos = (req, res, next) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return errorResponse(res, errores.array().map(e => e.msg).join(', '), 400);
    }
    next();
};

module.exports = { validarCampos };
