const Usuario = require('../models/usuario.model');
const { hashPassword } = require('../utils/bcrypt');
require('dotenv').config();

const crearSuperAdmin = async () => {
    const correo = process.env.SUPERADMIN_CORREO;
    const password = process.env.SUPERADMIN_PASSWORD;
    const nombre = process.env.SUPERADMIN_NOMBRE || 'Super Admin';

    if (!correo || !password) {
        console.log('SUPERADMIN_CORREO / SUPERADMIN_PASSWORD no configurados, se omite el seeder');
        return;
    }

    const existente = await Usuario.findOne({ where: { correo } });
    if (existente) {
        return;
    }

    const passwordHash = await hashPassword(password);
    await Usuario.create({
        nombre,
        correo,
        password: passwordHash,
        rol: 'admin',
        estado: true
    });

    console.log(`Superadmin creado: ${correo}`);
};

module.exports = { crearSuperAdmin };
