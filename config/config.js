'use strict';

const path = require('path');
const nconf = require('nconf');

const DEFAULT_PORT = 8015;
const DEFAULT_MONGODB_URL = 'mongodb://localhost/dollarstreet';

module.exports = function (app) {
  nconf.argv().env().file(path.join(__dirname, './embed.config.json'));

  nconf.set('PORT', process.env.PORT || DEFAULT_PORT);
  nconf.set('MONGODB_URL', process.env.MONGODB_URL || DEFAULT_MONGODB_URL);

  app.set('nconf', nconf);
};
