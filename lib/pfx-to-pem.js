'use strict';

const async = require('async');

const attributes = require('./attributes');
const key = require('./key');
const certificate = require('./certificate');

function toPem(params) {
  return new Promise((resolve, reject) => {
    params.path = `"${params.path}"`;

    async.parallel({
      attributes: cb => attributes(cb, params),
      key: cb => key(cb, params),
      certificate: cb => certificate(cb, params)
    }, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });

  });
}

module.exports.toPem = toPem;