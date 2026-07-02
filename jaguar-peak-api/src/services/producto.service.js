const productoRepository = require('../repositories/producto.repository');

const crearProducto = async (data) => {
    return await productoRepository.crear(data);
};

const listarProductos = async () => {
    return await productoRepository.listar();
};

const buscarProducto = async (id) => {
    return await productoRepository.buscarPorId(id);
};

const actualizarProducto = async (id, data) => {
    return await productoRepository.actualizar(id, data);
};

const eliminarProducto = async (id) => {
    return await productoRepository.eliminar(id);
};

module.exports = { crearProducto, listarProductos, buscarProducto, actualizarProducto, eliminarProducto };
