const Producto = require('../models/producto.model');

const crear = async (data) => {
    return await Producto.create(data);
};

const listar = async () => {
    return await Producto.findAll();
};

const buscarPorId = async (id) => {
    return await Producto.findByPk(id);
};

const actualizar = async (id, data) => {
    return await Producto.update(data, { where: { id } });
};

const eliminar = async (id) => {
    return await Producto.destroy({ where: { id } });
};

module.exports = { crear, listar, buscarPorId, actualizar, eliminar };
