const Local = require('../models/local.model');

const crear = async (data) => {
    return await Local.create(data);
};

const listar = async () => {
    return await Local.findAll();
};

const buscarPorId = async (id) => {
    return await Local.findByPk(id);
};

const actualizar = async (id, data) => {
    return await Local.update(data, { where: { id } });
};

const eliminar = async (id) => {
    return await Local.destroy({ where: { id } });
};

module.exports = { crear, listar, buscarPorId, actualizar, eliminar };
