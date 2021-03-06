const Hapi = require('hapi');
const dotenv = require('dotenv');

dotenv.load();
const server = new Hapi.Server();
server.connection({
    host: '0.0.0.0',
    port: 3000
});
server.register([{
    register: require('hapi-router'),
    options: {
        routes: 'routes/**/*.js'
    }
}, {
    register: require('hapi-postgres-connection')
}], function(err) {
    if (err) {
        console.log('Error cargando un módulo');
    }
});

server.start(function(err) {
    console.log('Server running at: ', server.info.uri);
});