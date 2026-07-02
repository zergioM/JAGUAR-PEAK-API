const usuarioRepository = require('../repositories/usuario.repository');
const { hashPassword, compararPassword } = require('../utils/bcrypt');
const { generarToken } = require('../utils/jwt');

const registrar = async ({ nombre, correo, password, rol }) => {
    const existente = await usuarioRepository.buscarPorCorreo(correo);
    if (existente) {
        throw new Error('Ya existe un usuario con ese correo');
    }
    const passwordHash = await hashPassword(password);
    const usuario = await usuarioRepository.crear({
        nombre,
        correo,
        password: passwordHash,
        rol: rol || 'empleado'
    });
    return { id: usuario.id, nombre: usuario.nombre, correo: usuario.correo, rol: usuario.rol };
};

const login = async ({ correo, password }) => {
    const usuario = await usuarioRepository.buscarPorCorreo(correo);
    if (!usuario) {
        throw new Error('Credenciales inválidas');
    }
    if (!usuario.estado) {
        throw new Error('Usuario inactivo');
    }
    const passwordValido = await compararPassword(password, usuario.password);
    if (!passwordValido) {
        throw new Error('Credenciales inválidas');
    }
    const token = generarToken({ id: usuario.id, correo: usuario.correo, rol: usuario.rol });
    return {
        token,
        usuario: { id: usuario.id, nombre: usuario.nombre, correo: usuario.correo, rol: usuario.rol }
    };
};

module.exports = { registrar, login };
