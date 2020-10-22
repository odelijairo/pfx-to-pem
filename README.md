# pfx-to-pem

<!-- [START badges] -->
[![NPM pfx-to-pem package](https://img.shields.io/npm/v/pfx-to-pem.svg)](https://npmjs.org/package/pfx-to-pem)
<!-- [END badges] -->

Converts .pfx to .pem files (key, cert or both) with simple OpenSSL bindings.

```javascript
const PfxToPem = require('pfx-to-pem');

const pem = await PfxToPem.toPem({
    path: '/path/to/my/cert.pfx',
    password: 'myPass'
});

```

Will return an object:

```json
{
    "attributes": {
        "subject": {
            "countryName": "",
            "organizationName": "",
            "stateOrProvinceName": "",
            "localityName": "",
            "organizationalUnitName": "",
            "commonName": ""
        },
        "issuer": {
            "countryName": "",
            "organizationName": "",
            "organizationalUnitName": "",
            "commonName": ""
        },
        "serial": "",
        "notBefore": "",
        "notAfter": "",
        "altNames": [],
        "ocspList": []
    },
    "certificate": "",
    "key": ""
}
```

