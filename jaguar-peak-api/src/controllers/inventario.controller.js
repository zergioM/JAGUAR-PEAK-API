const inventarioService = require('../services/inventario.service');
const { successResponse, errorResponse } = require('../utils/response');

const crear = async (req, res) => {
    try {
        const data = await inventarioService.crearInventario(req.body);
        return successResponse(res, data, 'Registro de inventario creado', 201);
    } catch (error) {
        return errorResponse(res, error.message, 400);
    }
};

const listar = async (req, res) => {
    try {
        const data = await inventarioService.listarInventarios();
        return successResponse(res, data);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

const buscar = async (req, res) => {
    try {
        const data = await inventarioService.buscarInventario(req.params.id);
        if (!data) return errorResponse(res, 'Registro no encontrado', 404);
        return successResponse(res, data);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

const actualizar = async (req, res) => {
    try {
        const data = await inventarioService.actualizarInventario(req.params.id, req.body);
        return successResponse(res, data, 'Inventario actualizado');
    } catch (error) {
        return errorResponse(res, error.message, 400);
    }
};

const eliminar = async (req, res) => {
    try {
        await inventarioService.eliminarInventario(req.params.id);
        return successResponse(res, null, 'Registro eliminado');
    } catch (error) {
        return errorResponse(res, error.message, 400);
    }
};

module.exports = { crear, listar, buscar, actualizar, eliminar };
