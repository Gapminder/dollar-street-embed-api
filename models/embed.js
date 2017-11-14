'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const embedSchema = new Schema({
  places: [Schema.Types.ObjectId],
  targetUrl: String,
  imageUrl: String
});

// footerSchema.index({'translations.lang': 1});

mongoose.model('Embed', embedSchema);
