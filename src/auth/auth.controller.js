const bcrypt = require('bcryptjs');
const { ioc } = require('maikuro');

function getCollection(collection) {
    const database = ioc.get('database');
    return database.getCollection(collection);
}

async function login(req,res) {
    if (!req.body.email || !req.body.pass) {
        return res.status(400).send('Email y contraseña son obligatorios.');
    }
    const usuariosCollection = getCollection('usuarios'); //Con esto llamo a la collection (tabla) de usuarios.
    
    //Si existe un usuario con el mail que me han pasado
    const user = await usuariosCollection.findOne({email: req.body.email});

    if (!user) {
        return res.status(401).send('Credenciales inválidas.');
    }

    const match = await bcrypt.compare(req.body.pass, user.pass); //Compara la pass que has pasado con la que tiene la bd y te devuelve true o false.

    if (!match) {
        return res.status(401).send('Credenciales inválidas.');
    }

    return res.status(200).send({ accessToken: '1234', expires: '900', tokenType: 'bearer' });
}

module.exports = {
    login,
}
