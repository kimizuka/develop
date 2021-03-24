const wifi = require('node-wifi');

wifi.init({
  iface: null
});

wifi.getCurrentConnections((error, currentConnections) => {
  if (error) {
    console.log(error);
  } else {
    console.log(currentConnections);
  }
});
