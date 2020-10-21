'use strict';

const child_process = require('child_process');
const removeBagAttributes = require('./remove-bag-attributes');

function key(cb, params) {
  const command = [
    'openssl pkcs12 -in',
    params.path,
    '-nodes -nocerts ',
    '-passin pass:' + (params.password || '')
  ].join(' ');

  child_process.exec(command, (err, stdout) => {
    if (err) return cb(err);

    cb(null, removeBagAttributes(stdout));
  });
}

module.exports = key;