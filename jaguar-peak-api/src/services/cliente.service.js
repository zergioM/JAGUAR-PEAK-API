const clienteRepository = require('../repositories/cliente.repository');

const crearCliente = async (data) => {
    return await clienteRepository.crear(data);
};

const listarClientes = async () => {
    return await clienteRepository.listar();
};

const buscarCliente = async (id) => {
    return await clienteRepository.buscarPorId(id);
};

const actualizarCliente = async (id, data) => {
    return await clienteRepository.actualizar(id, data);
};

const eliminarCliente = async (id) => {
    return await clienteRepository.eliminar(id);
};

module.exports = { crearCliente, listarClientes, buscarCliente, actualizarCliente, eliminarCliente };
