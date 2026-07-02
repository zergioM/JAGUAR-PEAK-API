const { body } = require('express-validator');

const registrarValidator = [
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    body('correo').isEmail().withMessage('El correo debe ser válido'),
    body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres')
];

const loginValidator = [
    body('correo').isEmail().withMessage('El correo debe ser válido'),
    body('password').notEmpty().withMessage('La contraseña es obligatoria')
];

module.exports = { registrarValidator, loginValidator };
