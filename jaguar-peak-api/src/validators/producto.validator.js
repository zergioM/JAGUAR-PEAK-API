const { body } = require('express-validator');

const crearProductoValidator = [
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    body('marca').notEmpty().withMessage('La marca es obligatoria'),
    body('categoria').notEmpty().withMessage('La categoría es obligatoria'),
    body('precio').isFloat({ min: 0 }).withMessage('El precio debe ser un número positivo')
];

module.exports = { crearProductoValidator };
