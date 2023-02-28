const googlehome = require('google-home-notifier');
const language = 'ja';

googlehome.device('Nest-Wifi-point-6d847e3743ca5734a0a694b4ff83c889', language);

googlehome.notify('こんにちは', (evt) => {
  console.log(evt);
});