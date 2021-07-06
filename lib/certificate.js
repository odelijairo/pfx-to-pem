'use strict';

const child_process = require('child_process');
const removeBagAttributes = require('./remove-bag-attributes');

function certificate(cb, params) {
  const command = [
    'openssl pkcs12 -in',
    params.path,
    '-nodes -clcerts -nokeys',
    '-passin "pass:' + (params.password || '') + '"'
  ].join(' ');

  child_process.exec(command, (err, stdout) => {
    if (err) return cb(err);

    cb(null, removeBagAttributes(stdout));
  });
}

module.exports = certificate;