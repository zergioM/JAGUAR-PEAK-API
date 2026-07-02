const productoService = require('../services/producto.service');
const { successResponse, errorResponse } = require('../utils/response');

const crear = async (req, res) => {
    try {
        const data = await productoService.crearProducto(req.body);
        return successResponse(res, data, 'Producto creado', 201);
    } catch (error) {
        return errorResponse(res, error.message, 400);
    }
};

const listar = async (req, res) => {
    try {
        const data = await productoService.listarProductos();
        return successResponse(res, data);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

const buscar = async (req, res) => {
    try {
        const data = await productoService.buscarProducto(req.params.id);
        if (!data) return errorResponse(res, 'Producto no encontrado', 404);
        return successResponse(res, data);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

const actualizar = async (req, res) => {
    try {
        const data = await productoService.actualizarProducto(req.params.id, req.body);
        return successResponse(res, data, 'Producto actualizado');
    } catch (error) {
        return errorResponse(res, error.message, 400);
    }
};

const eliminar = async (req, res) => {
    try {
        await productoService.eliminarProducto(req.params.id);
        return successResponse(res, null, 'Producto eliminado');
    } catch (error) {
        return errorResponse(res, error.message, 400);
    }
};

module.exports = { crear, listar, buscar, actualizar, eliminar };
