const { Client, DefaultMediaReceiver } = require('castv2-client');
const ip = require('ip');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const client = new Client();
const mdns = require('mdns');
const browser = mdns.createBrowser(mdns.tcp('googlecast'));
const port = 3000;
let host = '';

browser.on('serviceUp', function(service) {
  if (host || !service.addresses[0]) {
    return;
  }

  host = service.addresses[0];

  app.use('/', express.static(__dirname + '/public'));
  http.listen(port, '0.0.0.0');

  const media = {
    contentId: `http://${ ip.address() }:${ port }/audio.mp3`,
    contentType: 'audio/mp3',
    streamType: 'BUFFERED',
  };

  client.connect(host, () => {
    client.launch(DefaultMediaReceiver, (_, player) => {
      player.load(media, {
        autoplay: true
      }, (err) => {
        if (err) {
          console.error(err);
        }
      });
    });
  });

  browser.stop();
});

browser.start();