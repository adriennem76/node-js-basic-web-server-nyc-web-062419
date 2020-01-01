"use strict";

const http         = require('http');
const finalhandler = require('finalhandler');
const Router       = require('router');
let messages = [];

const router = new Router();

router.get('/', (request, response) => {
  // A good place to start!
  response.end();https://learn.co/tracks/introduction-to-node-js/intro-to-node-js/async-i-o/building-a-basic-web-server#
});

route.post('/message', (request, response) => {
  // Save the message and send the message id back to the client.
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
