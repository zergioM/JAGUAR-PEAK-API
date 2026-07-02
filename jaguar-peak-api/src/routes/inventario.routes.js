const express = require('express');
const router = express.Router();
const inventarioController = require('../controllers/inventario.controller');
const { validarJWT } = require('../middlewares/auth.middleware');
const { esAdminRole } = require('../middlewares/role.middleware');
const { validarCampos } = require('../middlewares/validate.middleware');
const { crearInventarioValidator } = require('../validators/inventario.validator');

router.post('/', [validarJWT, esAdminRole, crearInventarioValidator, validarCampos], inventarioController.crear);
router.get('/', [validarJWT], inventarioController.listar);
router.get('/:id', [validarJWT], inventarioController.buscar);
router.put('/:id', [validarJWT, esAdminRole], inventarioController.actualizar);
router.delete('/:id', [validarJWT, esAdminRole], inventarioController.eliminar);

module.exports = router;
