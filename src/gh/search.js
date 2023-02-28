var mdns = require('mdns');
var browser = mdns.createBrowser(mdns.tcp('googlecast'));

browser.start();

browser.on('serviceUp', function(service) {
  console.log(service.addresses[0]);

  browser.stop();
});