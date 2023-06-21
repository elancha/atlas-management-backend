const { CONFIG } = require('maikuro');
const authRouter = require('./auth/auth.router');
const alumnosRouter = require('./alumnos/alumnos.router')

//A esta función le llega la app que se va a ejecutar (objeto express)
function mount(app) {
    app.use(CONFIG.API_ROOT, authRouter) //En mi app de express, en la raíz API añado el router de auth.
    app.use(CONFIG.API_ROOT, alumnosRouter)
}

module.exports = {
    mount,
}
