const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Local = require('./local.model');
const Producto = require('./producto.model');

const Inventario = sequelize.define('Inventario', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    stockMinimo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}, {
    tableName: 'inventarios',
    timestamps: true
});

Local.belongsToMany(Producto, { through: Inventario, foreignKey: 'local_id', otherKey: 'producto_id' });
Producto.belongsToMany(Local, { through: Inventario, foreignKey: 'producto_id', otherKey: 'local_id' });

Inventario.belongsTo(Local, { foreignKey: 'local_id' });
Inventario.belongsTo(Producto, { foreignKey: 'producto_id' });
Local.hasMany(Inventario, { foreignKey: 'local_id' });
Producto.hasMany(Inventario, { foreignKey: 'producto_id' });

module.exports = Inventario;
