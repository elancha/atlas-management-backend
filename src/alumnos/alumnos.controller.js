const { ioc } = require('maikuro');

function getCollection(collection) {
  const database = ioc.get('database');
  return database.getCollection(collection);
}

async function getAlumnos(req, res) {
  const alumnosCollection = getCollection('alumnos');
  const alumnos = await alumnosCollection.find();
  return res.status(200).send(alumnos);
}

async function getAlumno(req, res) {
  if (!req.params.dni) {
    return res.status(400).send('DNI es necesario.');
  }
  const alumnosCollection = getCollection('alumnos');

  const alumno = await alumnosCollection.findOne({ dni: req.params.dni });

  if (!alumno) {
    return res.status(404).send('No existe el alumno.');
  }

  return res.status(200).send(alumno);
}

async function createAlumno(req, res) {
  if (!req.body.dni && req.body.nombre) {
    return res.status(400).send('DNI y Nombre son obligatorios.');
  }

  const alumnosCollection = getCollection('alumnos');

  const alumno = await alumnosCollection.findOne({ dni: req.body.dni });
  if (alumno) {
    return res.status(401).send('Ya existe un alumno con ese DNI.');
  }

  const newAlumno = await alumnosCollection.insertOne(req.body);

  return res.status(200).send(newAlumno);
}

async function deleteAlumno(req, res) {
  if (!req.params.dni) {
    return res.status(400).send('DNI es necesario.');
  }

  const alumnosCollection = getCollection('alumnos');

  const alumno = await alumnosCollection.findOne({ dni: req.params.dni });
  if (alumno) {
    await alumnosCollection.removeById(req.body);
    return res.status(200).send('Alumno eliminado');
  }

  return res.status(404).send('No existe un alumno con ese DNI.');
}

module.exports = {
  getAlumno,
  getAlumnos,
  createAlumno,
  deleteAlumno,
};
