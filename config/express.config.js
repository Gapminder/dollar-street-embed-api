'use strict';

const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');

module.exports = app => {
  app.use(logger('dev'));
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(cors());
};
