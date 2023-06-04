//Este archivo será el que tenga las rutas

const { Router } = require('maikuro');
const authController = require('./auth.controller');
const router = Router();

router.post('/auth/login', authController.login); //Metodo post para hacer login

module.exports = router;
