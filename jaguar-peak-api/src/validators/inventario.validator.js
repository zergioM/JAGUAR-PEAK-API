const { body } = require('express-validator');

const crearInventarioValidator = [
    body('local_id').isInt().withMessage('El local_id debe ser un número entero'),
    body('producto_id').isInt().withMessage('El producto_id debe ser un número entero'),
    body('stock').isInt({ min: 0 }).withMessage('El stock debe ser un número entero positivo'),
    body('stockMinimo').isInt({ min: 0 }).withMessage('El stockMinimo debe ser un número entero positivo')
];

module.exports = { crearInventarioValidator };
