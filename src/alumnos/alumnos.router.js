const { Router } = require('maikuro');
const alumnosController = require('./alumnos.controller');

const router = Router();

router.get('/alumnos/:dni', alumnosController.getAlumno);
router.get('/alumnos/', alumnosController.getAlumnos);
router.post('/alumnos', alumnosController.createAlumno);
router.delete('/alumnos/:dni', alumnosController.deleteAlumno);

module.exports = router;
