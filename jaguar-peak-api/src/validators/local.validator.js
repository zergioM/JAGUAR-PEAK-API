const { body } = require('express-validator');

const crearLocalValidator = [
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    body('direccion').notEmpty().withMessage('La dirección es obligatoria'),
    body('ciudad').notEmpty().withMessage('La ciudad es obligatoria'),
    body('telefono').notEmpty().withMessage('El teléfono es obligatorio')
];

module.exports = { crearLocalValidator };
