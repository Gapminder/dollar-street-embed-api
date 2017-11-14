'use strict';

const config = require('./config');
const expressConfig = require('./express.config');
const dbConfig = require('./db.config');

module.exports = app => {
  config(app);
  expressConfig(app);
  dbConfig(app);
};
