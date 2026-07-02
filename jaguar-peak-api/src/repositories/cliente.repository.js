const Cliente = require('../models/cliente.model');

const crear = async (data) => {
    return await Cliente.create(data);
};

const listar = async () => {
    return await Cliente.findAll();
};

const buscarPorId = async (id) => {
    return await Cliente.findByPk(id);
};

const actualizar = async (id, data) => {
    return await Cliente.update(data, { where: { id } });
};

const eliminar = async (id) => {
    return await Cliente.destroy({ where: { id } });
};

module.exports = { crear, listar, buscarPorId, actualizar, eliminar };
