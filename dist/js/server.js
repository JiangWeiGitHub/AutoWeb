'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var localIP = '192.168.5.143';
var port = 8080;

var index = _fs2.default.readFileSync('./views/index.html');

var sayHello = function sayHello(req, res) {

  console.log("We've got a request for " + req.url);

  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.write(index);

  res.end();
};

var server = _http2.default.createServer(sayHello);

server.listen(port, localIP);

console.log('Server running at http://' + localIP + ':' + port + '/');