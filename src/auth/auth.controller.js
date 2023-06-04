const bcrypt = require('bcryptjs');

async function login(req,res) {
    if (!req.body.email || !req.body.pass) {
        return res.status(400).send('Email y contraseña son obligatorios.');
    }
    return res.status(200).send(req.body);
}

module.exports = {
    login,
}
