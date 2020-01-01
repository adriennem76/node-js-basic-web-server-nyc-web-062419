"use strict";

const http         = require('http');
const finalhandler = require('finalhandler');
const Router       = require('router');
const bodyParser = require('body-parser');
let messages = [];

const router = new Router({ mergeParams: true });
router.use(bodyParser.json());

router.get('/message/:id', (request, response) => {
  // A good place to start!
  response.end();https://learn.co/tracks/introduction-to-node-js/intro-to-node-js/async-i-o/building-a-basic-web-server#
});

route.post('/message', (request, response) => {
  // Save the message and send the message id back to the client.
});

const server = http.createServer((request, response) => {
  router(request, response, finalhandler(request, response));
});

curl -X POST -H "content-type: application/json" http://localhost:3000/message -d '{"id":1,"message":"Our first message."}'

exports.listen = function(port, callback) {
  server.listen(port, callback);
};

exports.close = function(callback) {
  server.close(callback);
};
