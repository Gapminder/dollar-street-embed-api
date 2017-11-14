'use strict';

const mongoose = require('mongoose');

module.exports = app => {
  const nconf = app.get('nconf');
  const mongoUri = nconf.get('MONGODB_URL');
  const db = mongoose.connection;

  mongoose.connect(mongoUri);

  /*eslint-disable*/
  db.on('error', err => console.log('db connect error', err));
  db.once('open', () => console.log('db connect good: ', mongoUri));
  db.once('close', () => console.log('db connect close'));
  /*eslint-enable*/
};
