const clienteService = require('../services/cliente.service');
const { successResponse, errorResponse } = require('../utils/response');

const crear = async (req, res) => {
    try {
        const data = await clienteService.crearCliente(req.body);
        return successResponse(res, data, 'Cliente creado', 201);
    } catch (error) {
        return errorResponse(res, error.message, 400);
    }
};

const listar = async (req, res) => {
    try {
        const data = await clienteService.listarClientes();
        return successResponse(res, data);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

const buscar = async (req, res) => {
    try {
        const data = await clienteService.buscarCliente(req.params.id);
        if (!data) return errorResponse(res, 'Cliente no encontrado', 404);
        return successResponse(res, data);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

const actualizar = async (req, res) => {
    try {
        const data = await clienteService.actualizarCliente(req.params.id, req.body);
        return successResponse(res, data, 'Cliente actualizado');
    } catch (error) {
        return errorResponse(res, error.message, 400);
    }
};

const eliminar = async (req, res) => {
    try {
        await clienteService.eliminarCliente(req.params.id);
        return successResponse(res, null, 'Cliente eliminado');
    } catch (error) {
        return errorResponse(res, error.message, 400);
    }
};

module.exports = { crear, listar, buscar, actualizar, eliminar };
