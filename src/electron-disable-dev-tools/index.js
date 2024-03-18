const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
  const window = new BrowserWindow({
    width: 375,
    height: 812,
    webPreferences: {
      devTools: false
    }
  });

  window.loadURL('https://kimizuka.fm');
});