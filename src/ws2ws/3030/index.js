const request = require('request');
const express = require('express');
const ip = require('ip');

request({
  url: 'http://localhost:3030',
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

    request({
      url: 'http://localhost:3000/socket',
      headers: {
        'Content-type': 'application/json',
      },
      json: {
        hode: 'fuga'
      },
      method: 'POST'
    }, (err, res, body) => {
      if (err) {
        console.error(err);

        return;
      }

      console.log(res);
      console.log(body);
    });

    wss.on('connection', (ws) => {
      connections.push(ws);

      connections.forEach((connection, i) => {
        connection.send(JSON.stringify({
          name: 'connection'
        }));
      });
    });



    server.use(express.static(__dirname + '/public'));
    http.listen(3030, '0.0.0.0');
  }
});