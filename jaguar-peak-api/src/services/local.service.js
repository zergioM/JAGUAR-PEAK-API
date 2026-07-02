const localRepository = require('../repositories/local.repository');

const crearLocal = async (data) => {
    return await localRepository.crear(data);
};

const listarLocales = async () => {
    return await localRepository.listar();
};

const buscarLocal = async (id) => {
    return await localRepository.buscarPorId(id);
};

const actualizarLocal = async (id, data) => {
    return await localRepository.actualizar(id, data);
};

const eliminarLocal = async (id) => {
    return await localRepository.eliminar(id);
};

module.exports = { crearLocal, listarLocales, buscarLocal, actualizarLocal, eliminarLocal };
