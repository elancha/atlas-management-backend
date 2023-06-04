require('dotenv').config();
const { startServer } = require('maikuro'); //Ve a maikuro y de ahi coges la función startServer
const { mount } = require('./routes');

(async () => {
    startServer({mount});
})(); //Encapsulamos en servidor dentro del arrow function. Los parentesis finales me dicen que coja lo anterior y lo ejecute.
