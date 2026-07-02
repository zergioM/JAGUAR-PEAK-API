const Trabajador = require('../models/trabajador.model');
const Local = require('../models/local.model');

const crear = async (data) => {
    return await Trabajador.create(data);
};

const listar = async () => {
    return await Trabajador.findAll({ include: [Local] });
};

const buscarPorId = async (id) => {
    return await Trabajador.findByPk(id, { include: [Local] });
};

const actualizar = async (id, data) => {
    return await Trabajador.update(data, { where: { id } });
};

const eliminar = async (id) => {
    return await Trabajador.destroy({ where: { id } });
};

module.exports = { crear, listar, buscarPorId, actualizar, eliminar };
