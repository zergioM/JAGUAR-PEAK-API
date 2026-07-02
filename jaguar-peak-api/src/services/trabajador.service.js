const trabajadorRepository = require('../repositories/trabajador.repository');

const crearTrabajador = async (data) => {
    return await trabajadorRepository.crear(data);
};

const listarTrabajadores = async () => {
    return await trabajadorRepository.listar();
};

const buscarTrabajador = async (id) => {
    return await trabajadorRepository.buscarPorId(id);
};

const actualizarTrabajador = async (id, data) => {
    return await trabajadorRepository.actualizar(id, data);
};

const eliminarTrabajador = async (id) => {
    return await trabajadorRepository.eliminar(id);
};

module.exports = { crearTrabajador, listarTrabajadores, buscarTrabajador, actualizarTrabajador, eliminarTrabajador };
