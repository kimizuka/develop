const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
const fs = require('fs');
const webdriver = require('selenium-webdriver');
const { Builder, By, Key} = webdriver;

app.use('/', express.static(path.join(__dirname, 'public')));

io.on('connection', async (socket) => {
  const driver = await new Builder().forBrowser('chrome')
                                    // .setChromeOptions([
                                    //   '--headless',
                                    //   '--disable-gpu',
                                    //   '--window-size=620,750'
                                    // ])
                                    .build();

  // const capabilities = webdriver.Capabilities.chrome();

  // capabilities.set('chromeOptions', {
  //     args: [
  //         '--headless',
  //         `--window-size=600,800`
  //     ]
  // });

  try {
    await driver.get('https://twitter.com/ki_230');
    await wait(2000);

    for (let i = 0; i < 3; ++i) {
      await driver.findElement(By.tagName('body')).sendKeys(Key.TAB);
      await wait(100);
    }

    await driver.findElement(By.tagName('body')).sendKeys(Key.ENTER);
    await wait(3000);

    // const base64 = await driver.takeScreenshot();
    // const buffer = Buffer.from(base64, 'base64');

    // fs.writeFileSync('public/screenshot.png', buffer);

    // io.sockets.emit('screenshot', {
    //   base64
    // });

  } catch (err) {
    console.error(err)
  } finally {
    await driver.quit();
  }
});

async function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms || 0)
  });
}

http.listen(3000, '0.0.0.0');