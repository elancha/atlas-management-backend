require('dotenv').config();
const { startServer } = require('maikuro'); //Ve a maikuro y de ahi coges la función startServer
const { mount } = require('./routes');
const bootstrap = require('./bootstrap');
const { swaggerSpecs } = require('./swagger-specs');

(async () => {
    await bootstrap();
    startServer({mount, swaggerSpecs});
})(); //Encapsulamos el servidor dentro del arrow function. Los parentesis finales me dicen que coja lo anterior y lo ejecute.
