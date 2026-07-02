const Usuario = require('../models/usuario.model');

const crear = async (data) => {
    return await Usuario.create(data);
};

const listar = async () => {
    return await Usuario.findAll();
};

const buscarPorId = async (id) => {
    return await Usuario.findByPk(id);
};

const buscarPorCorreo = async (correo) => {
    return await Usuario.findOne({ where: { correo } });
};

const actualizar = async (id, data) => {
    return await Usuario.update(data, { where: { id } });
};

const eliminar = async (id) => {
    return await Usuario.destroy({ where: { id } });
};

module.exports = { crear, listar, buscarPorId, buscarPorCorreo, actualizar, eliminar };
