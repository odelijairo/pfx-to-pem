# pfx-to-pem

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
        "version": 2,
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
        "signatureAlgorithm": "",
        "fingerPrint": "",
        "altNames": [],
        "extensions": {
            "subjectAlternativeName": "",
            "basicConstraints": "",
            "authorityKeyIdentifier": "",
            "keyUsage": "",
            "certificatePolicies": "",
            "cRLDistributionPoints": "",
            "extendedKeyUsage": "",
            "authorityInformationAccess": ""
        }
    },
    "certificate": "",
    "key": ""
}
```
