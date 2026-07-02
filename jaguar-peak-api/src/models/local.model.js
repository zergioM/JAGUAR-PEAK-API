const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Local = sequelize.define('Local', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ciudad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'locales',
    timestamps: true
});

module.exports = Local;
