const localService = require('../services/local.service');
const { successResponse, errorResponse } = require('../utils/response');

const crear = async (req, res) => {
    try {
        const data = await localService.crearLocal(req.body);
        return successResponse(res, data, 'Local creado', 201);
    } catch (error) {
        return errorResponse(res, error.message, 400);
    }
};

const listar = async (req, res) => {
    try {
        const data = await localService.listarLocales();
        return successResponse(res, data);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

const buscar = async (req, res) => {
    try {
        const data = await localService.buscarLocal(req.params.id);
        if (!data) return errorResponse(res, 'Local no encontrado', 404);
        return successResponse(res, data);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

const actualizar = async (req, res) => {
    try {
        const data = await localService.actualizarLocal(req.params.id, req.body);
        return successResponse(res, data, 'Local actualizado');
    } catch (error) {
        return errorResponse(res, error.message, 400);
    }
};

const eliminar = async (req, res) => {
    try {
        await localService.eliminarLocal(req.params.id);
        return successResponse(res, null, 'Local eliminado');
    } catch (error) {
        return errorResponse(res, error.message, 400);
    }
};

module.exports = { crear, listar, buscar, actualizar, eliminar };
