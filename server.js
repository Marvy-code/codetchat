const http = require('http');
require('dotenv').config({path: './config/.env'});
const app = require('./app');
app.set('port', process.env.PORT);
const server = http.createServer(app);
server.listen(process.env.PORT);
console.log(`server running on port ${process.env.PORT}`);