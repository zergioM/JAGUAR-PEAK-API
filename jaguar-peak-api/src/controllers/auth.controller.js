const authService = require('../services/auth.service');
const { successResponse, errorResponse } = require('../utils/response');

const registrar = async (req, res) => {
    try {
        const data = await authService.registrar(req.body);
        return successResponse(res, data, 'Usuario registrado', 201);
    } catch (error) {
        return errorResponse(res, error.message, 400);
    }
};

const login = async (req, res) => {
    try {
        const data = await authService.login(req.body);
        return successResponse(res, data, 'Login exitoso');
    } catch (error) {
        return errorResponse(res, error.message, 401);
    }
};

module.exports = { registrar, login };
