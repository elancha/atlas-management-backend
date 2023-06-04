const { ioc, Database, MongodbEngine } = require('maikuro');

async function bootstrap(data) {
    ioc.register('MongodbEngine', MongodbEngine);

    const database = new Database({
        type: 'Mongodb',
        url: process.env.MONGODB_URL
    });
    await database.start();

    ioc.register('database', database, true);
}

module.exports = bootstrap;
