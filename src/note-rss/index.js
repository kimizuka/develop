const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
const fs = require('fs');
const { Builder } = require('selenium-webdriver');

app.use('/', express.static(path.join(__dirname, 'public')));

io.on('connection', async (socket) => {
  return;

  const driver = await new Builder().forBrowser('chrome')
                                    .setChromeOptions([
                                      '--headless',
                                      '--disable-gpu',
                                    ])
                                    .build();

  try {
    await driver.get('https://note.com/kimmy');

    const base64 = await driver.takeScreenshot();
    const buffer = Buffer.from(base64, 'base64');

    fs.writeFileSync('public/screenshot.png', buffer);

    io.sockets.emit('screenshot', {
      base64
    });

  } catch (err) {
    console.error(err)
  } finally {
    await driver.quit();
  }
});

http.listen(3000, '0.0.0.0');