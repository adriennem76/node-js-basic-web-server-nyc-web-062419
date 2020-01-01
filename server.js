"use strict";

const http         = require('http');
const finalhandler = require('finalhandler');
const Router       = require('router');

const router = new Router();

router.get('/', (request, response) => {
  // A good place to start!
  response.end();https://learn.co/tracks/introduction-to-node-js/intro-to-node-js/async-i-o/building-a-basic-web-server#
});

const server = http.createServer((request, response) => {
  router(request, response, finalhandler(request, response));
});

exports.listen = function(port, callback) {
  server.listen(port, callback);
};

exports.close = function(callback) {
  server.close(callback);
};
