const express = require('express');
const router = express.Router();
const localController = require('../controllers/local.controller');
const { validarJWT } = require('../middlewares/auth.middleware');
const { esAdminRole } = require('../middlewares/role.middleware');
const { validarCampos } = require('../middlewares/validate.middleware');
const { crearLocalValidator } = require('../validators/local.validator');

router.post('/', [validarJWT, esAdminRole, crearLocalValidator, validarCampos], localController.crear);
router.get('/', [validarJWT], localController.listar);
router.get('/:id', [validarJWT], localController.buscar);
router.put('/:id', [validarJWT, esAdminRole], localController.actualizar);
router.delete('/:id', [validarJWT, esAdminRole], localController.eliminar);

module.exports = router;
