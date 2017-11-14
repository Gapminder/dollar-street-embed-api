'use strict';

const path = require('path');
const nconf = require('nconf');

const DEFAULT_PORT = 8015;
const DEFAULT_MONGODB_URL = 'mongodb://localhost/dollarstreet';

module.exports = function (app) {
  nconf.argv().env().file(path.join(__dirname, './embed.config.json'));

  nconf.set('PORT', process.env.PORT || DEFAULT_PORT);
  nconf.set('MONGODB_URL', process.env.MONGODB_URL || DEFAULT_MONGODB_URL);

  const s3keys = {
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY
  }

  nconf.set('s3keys', s3keys);
  nconf.set('s3region', process.env.S3_REGION);
  nconf.set('s3serverName', process.env.S3_SERVER_NAME);
  nconf.set('s3bucket', process.env.S3_BUCKET);

  app.set('nconf', nconf);
};
