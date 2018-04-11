'use strict';

import mongoose = require('mongoose');
import { ObjectID } from 'mongodb';

const Embed = mongoose.model('Embed');

module.exports = (app: any) => {
  app.get('/show-embed-set',
    showEmbedSet);

    function showEmbedSet(req: any, res: any) {
      const query = req.query;
      const embedId = query.embed;

      Embed
        .findOne({_id: embedId})
        .lean()
        .exec((err: any, data: any) => {
          if (err) {
            return res.json({success: !err, msg: [], data: null, error: err});
          }

          if (req.headers.referer) {
            res.redirect(`${data.targetUrl}`);
            return;
          }

          res.writeHeader(200, {"Content-Type": "text/html"});
          let html = `
            <!DOCTYPE html>
            <html lang="en" prefix="og: http://ogp.me/ns#">
            <head>
              <meta property="og:image" content="${data.imageUrl}">
              <meta property="og:title" content="Dollar Street">
              <meta property="og:description" content="Imagine the world as a street. Everyone lives on Dollar Street. The richest to the left and the poorest to the right. Every else live somewhere in between. Where would you live? Visit Dollar Street and see homes from hundreds of homes from all over the World.">
              <meta property="og:type" content="article">
            </head>
          `;
          res.write(html);
          res.end();
        });
    }
};
