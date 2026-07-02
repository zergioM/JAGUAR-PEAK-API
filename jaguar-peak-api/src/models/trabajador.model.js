const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Local = require('./local.model');

const Trabajador = sequelize.define('Trabajador', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    documento: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    nombres: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellidos: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cargo: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'trabajadores',
    timestamps: true
});

Local.hasMany(Trabajador, { foreignKey: 'local_id' });
Trabajador.belongsTo(Local, { foreignKey: 'local_id' });

module.exports = Trabajador;
