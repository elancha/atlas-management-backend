const { ioc } = require('maikuro');

function getCollection(collection) {
    const database = ioc.get('database');
    return database.getCollection(collection);
}

async function alumno(req,res) {
    if (!req.body.dni) {
        return res.status(400).send('DNI no existe.');
    }
    const alumnosCollection = getCollection('alumnos');

    const alumno = await alumnosCollection.findOne({dni: req.body.dni});

    if (!alumno) {
        return res.status(401).send('Inválido.');
    }

    return res.status(200).send({ accessToken: '1234', expires: '900', tokenType: 'bearer' });
}

module.exports = {
    alumno,
}