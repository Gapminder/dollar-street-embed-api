'use strict';

import mongoose = require('mongoose');
import { ObjectID } from 'mongodb';

const Embed = mongoose.model('Embed');

module.exports = (app: any) => {
  app.get('/v1/get-index-mock',
    getIndexMock);

    function getIndexMock(): Function {
      return (req: any, res: any) => {
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
                <meta property="og:description" content="See how people really live">
                <meta property="og:type" content="article">
              </head>
            `;
            res.write(html);
            res.end();
          });
      }
    }
};
