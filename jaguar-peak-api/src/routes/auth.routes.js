const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { validarCampos } = require('../middlewares/validate.middleware');
const { registrarValidator, loginValidator } = require('../validators/auth.validator');

router.post('/registrar', [registrarValidator, validarCampos], authController.registrar);
router.post('/login', [loginValidator, validarCampos], authController.login);

module.exports = router;
