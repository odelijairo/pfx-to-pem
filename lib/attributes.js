'use strict';

const child_process = require('child_process');
const x509 = require('x509');

function attributes(cb, params) {
  const command = [
    'openssl pkcs12 -in',
    params.path,
    '-nodes -passin pass:' + (params.password || '')
  ].join(' ');

  child_process.exec(command, (err, stdout) => {
    if (err) return cb(err);

    const attributes = x509.parseCert(stdout);

    cb(null, attributes);
  });
}

module.exports = attributes;