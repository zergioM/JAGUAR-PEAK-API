const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/cliente.controller');
const { validarJWT } = require('../middlewares/auth.middleware');
const { esAdminRole } = require('../middlewares/role.middleware');
const { validarCampos } = require('../middlewares/validate.middleware');
const { crearClienteValidator } = require('../validators/cliente.validator');

router.post('/', [validarJWT, esAdminRole, crearClienteValidator, validarCampos], clienteController.crear);
router.get('/', [validarJWT], clienteController.listar);
router.get('/:id', [validarJWT], clienteController.buscar);
router.put('/:id', [validarJWT, esAdminRole], clienteController.actualizar);
router.delete('/:id', [validarJWT, esAdminRole], clienteController.eliminar);

module.exports = router;
