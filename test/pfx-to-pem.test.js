const chai = require('chai');
const expect = chai.expect

const PfxToPem = require('../index');

describe('PfxToPem', () => {

  it('should return certificate values', async () => {
    const pem = await PfxToPem.toPem({
      path: './test/data/test.pfx'
    })

    expect(pem).to.have.own.property('certificate')
    expect(pem).to.have.own.property('key')
    expect(pem).to.have.own.property('attributes')
    console.log(pem);
  });

  it('should handle space in path', async () => {
    const pem = await PfxToPem.toPem({
      path: './test/data/i have a space/test.pfx'
    });

    expect(pem).to.have.own.property('certificate')
    expect(pem).to.have.own.property('key')
    expect(pem).to.have.own.property('attributes')
    console.log(pem);
  });
});
