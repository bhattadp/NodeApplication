const app = require('./index');
const http = require('http');
const config = require('./config');

port = 3000;//config.server.port;
app.set('port', port);

var server = http.createServer(app);
server.listen(port);

console.log('Node RESTful API server started on: ' + port);