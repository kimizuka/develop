'use strict';

require('dotenv').config();

const ngrok = require('ngrok');
const { TOKEN } = process.env;
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

app.use('/', express.static(`${ __dirname }/public`));
app.listen(PORT, '0.0.0.0');

(async () => {
  const url = await ngrok.connect({
    addr: PORT,
    authtoken: TOKEN
  });

  console.log(url);
})();