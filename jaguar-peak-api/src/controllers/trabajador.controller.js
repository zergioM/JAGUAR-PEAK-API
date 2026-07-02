const trabajadorService = require('../services/trabajador.service');
const { successResponse, errorResponse } = require('../utils/response');

const crear = async (req, res) => {
    try {
        const data = await trabajadorService.crearTrabajador(req.body);
        return successResponse(res, data, 'Trabajador creado', 201);
    } catch (error) {
        return errorResponse(res, error.message, 400);
    }
};

const listar = async (req, res) => {
    try {
        const data = await trabajadorService.listarTrabajadores();
        return successResponse(res, data);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

const buscar = async (req, res) => {
    try {
        const data = await trabajadorService.buscarTrabajador(req.params.id);
        if (!data) return errorResponse(res, 'Trabajador no encontrado', 404);
        return successResponse(res, data);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

const actualizar = async (req, res) => {
    try {
        const data = await trabajadorService.actualizarTrabajador(req.params.id, req.body);
        return successResponse(res, data, 'Trabajador actualizado');
    } catch (error) {
        return errorResponse(res, error.message, 400);
    }
};

const eliminar = async (req, res) => {
    try {
        await trabajadorService.eliminarTrabajador(req.params.id);
        return successResponse(res, null, 'Trabajador eliminado');
    } catch (error) {
        return errorResponse(res, error.message, 400);
    }
};

module.exports = { crear, listar, buscar, actualizar, eliminar };
