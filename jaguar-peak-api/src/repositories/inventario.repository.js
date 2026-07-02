const Inventario = require('../models/inventario.model');
const Local = require('../models/local.model');
const Producto = require('../models/producto.model');

const crear = async (data) => {
    return await Inventario.create(data);
};

const listar = async () => {
    return await Inventario.findAll({ include: [Local, Producto] });
};

const buscarPorId = async (id) => {
    return await Inventario.findByPk(id, { include: [Local, Producto] });
};

const actualizar = async (id, data) => {
    return await Inventario.update(data, { where: { id } });
};

const eliminar = async (id) => {
    return await Inventario.destroy({ where: { id } });
};

module.exports = { crear, listar, buscarPorId, actualizar, eliminar };
