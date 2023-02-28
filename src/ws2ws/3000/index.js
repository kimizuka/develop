const request = require('request');
const express = require('express');
const ip = require('ip');

request({
  url: 'http://localhost:3000',
  method: 'GET'
}, (err, res, body) => {
  if (err && err.code === 'ECONNREFUSED') {
    const server = express();
    const http = require('http').Server(server);
    const WebSocketServer = require('ws').Server;
    const wss = new WebSocketServer({
      server: http
    });
    const connections = [];

    wss.on('connection', (ws) => {
      connections.push(ws);

      connections.forEach((connection, i) => {
        connection.send(JSON.stringify({
          name: 'connection'
        }));
      });
    });

    server.post('/socket', (req, res) => {
      console.log(req);
      res.send('rarara');
    });

    server.use(express.static(__dirname + '/public'));
    http.listen(3000, '0.0.0.0');
  }
});