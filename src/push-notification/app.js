const { app, Notification } = require('electron');

app.on('ready', () => {
  const notification = new Notification();

  // notification.title = 'eye drop';

  notification.on('click', () => {
    console.log('!');
  });

  notification.show();

  // setInterval(() => {
  //   notification.show();
  // }, 1000 * 60 * 60);
});