const { Router } = require('maikuro');
const alumnosController = require('./alumnos.controller')
const router = Router();

router.post('/alumnos/alumno', alumnosController.alumno);

module.exports = router;
