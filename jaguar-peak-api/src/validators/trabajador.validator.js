const { body } = require('express-validator');

const crearTrabajadorValidator = [
    body('documento').notEmpty().withMessage('El documento es obligatorio'),
    body('nombres').notEmpty().withMessage('Los nombres son obligatorios'),
    body('apellidos').notEmpty().withMessage('Los apellidos son obligatorios'),
    body('cargo').notEmpty().withMessage('El cargo es obligatorio'),
    body('local_id').isInt().withMessage('El local_id debe ser un número entero')
];

module.exports = { crearTrabajadorValidator };
