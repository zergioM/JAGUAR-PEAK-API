const express = require('express');
const router = express.Router();
const trabajadorController = require('../controllers/trabajador.controller');
const { validarJWT } = require('../middlewares/auth.middleware');
const { esAdminRole } = require('../middlewares/role.middleware');
const { validarCampos } = require('../middlewares/validate.middleware');
const { crearTrabajadorValidator } = require('../validators/trabajador.validator');

router.post('/', [validarJWT, esAdminRole, crearTrabajadorValidator, validarCampos], trabajadorController.crear);
router.get('/', [validarJWT], trabajadorController.listar);
router.get('/:id', [validarJWT], trabajadorController.buscar);
router.put('/:id', [validarJWT, esAdminRole], trabajadorController.actualizar);
router.delete('/:id', [validarJWT, esAdminRole], trabajadorController.eliminar);

module.exports = router;
