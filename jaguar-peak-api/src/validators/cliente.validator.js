const { body } = require('express-validator');

const crearClienteValidator = [
    body('documento').notEmpty().withMessage('El documento es obligatorio'),
    body('nombres').notEmpty().withMessage('Los nombres son obligatorios'),
    body('apellidos').notEmpty().withMessage('Los apellidos son obligatorios'),
    body('telefono').notEmpty().withMessage('El teléfono es obligatorio'),
    body('correo').isEmail().withMessage('El correo debe ser válido')
];

module.exports = { crearClienteValidator };
