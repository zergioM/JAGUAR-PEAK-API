const express = require('express');
const router = express.Router();
const productoController = require('../controllers/producto.controller');
const { validarJWT } = require('../middlewares/auth.middleware');
const { esAdminRole } = require('../middlewares/role.middleware');
const { validarCampos } = require('../middlewares/validate.middleware');
const { crearProductoValidator } = require('../validators/producto.validator');

router.post('/', [validarJWT, esAdminRole, crearProductoValidator, validarCampos], productoController.crear);
router.get('/', [validarJWT], productoController.listar);
router.get('/:id', [validarJWT], productoController.buscar);
router.put('/:id', [validarJWT, esAdminRole], productoController.actualizar);
router.delete('/:id', [validarJWT, esAdminRole], productoController.eliminar);

module.exports = router;
