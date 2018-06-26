'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const embedSchema = new Schema({
  places: [Schema.Types.ObjectId],
  targetUrl: String,
  imageUrl: String,
  imageSize: {
    width: Number,
    height: Number
  }
});

// footerSchema.index({'translations.lang': 1});

mongoose.model('Embed', embedSchema);
