const chai = require('chai');
const expect = chai.expect

const PfxToPem = require('../index');

const NORMAL_PATH = './test/data/test.pfx';
const SPACE_PATH = './test/data/i have a space/test.pfx';

describe('PfxToPem', () => {

  it('should return certificate values', async () => {
    const pem = await PfxToPem.toPem({
      path: NORMAL_PATH
    })

    expect(pem).to.have.own.property('certificate')
    expect(pem).to.have.own.property('key')
    expect(pem).to.have.own.property('attributes')
  });

  it('should handle space in path', async () => {
    const pem = await PfxToPem.toPem({
      path: SPACE_PATH
    });

    expect(pem).to.have.own.property('certificate')
    expect(pem).to.have.own.property('key')
    expect(pem).to.have.own.property('attributes')
  });

  it('should return all certificate attributes', async () => {
    const pem = await PfxToPem.toPem({
      path: NORMAL_PATH
    });

    const expectedSubject = {
      commonName: 'test',
      countryName: 'US',
      localityName: 'Huntsville',
      organizationName: 'AAL',
      organizationalUnitName: 'ACD',
      stateOrProvinceName: 'Alabama'
    }
    const expectedIssuer = {
      commonName: 'test',
      countryName: 'US',
      localityName: 'Huntsville',
      organizationName: 'AAL',
      organizationalUnitName: 'ACD',
      stateOrProvinceName: 'Alabama'
    }

    expect(pem.attributes.subject).to.deep.equal(expectedSubject)
    expect(pem.attributes.issuer).to.deep.equal(expectedIssuer)
    expect(pem.attributes.serial).to.equal('-4F0312ABA753BD40B50DFAB85968452C')
    expect(pem.attributes.notBefore).to.equal('Dec  2 16:06:45 2015 GMT')
    expect(pem.attributes.notAfter).to.equal('Dec 31 23:59:59 2039 GMT')
    expect(pem.attributes).to.have.own.property('altNames')
  });
});
