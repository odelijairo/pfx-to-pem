'use strict';

const CERTIFICATE_LABEL = 'CERTIFICATE';
const PRIVATE_KEY_LABEL = 'PRIVATE KEY';
const RSA_PRIVATE_KEY_LABEL = 'RSA PRIVATE KEY'

function removeBagAttributes(content) {
  let title;

  if (content.indexOf(CERTIFICATE_LABEL) > -1) {
    title = CERTIFICATE_LABEL;
  }

  if (content.indexOf(PRIVATE_KEY_LABEL) > -1) {
    title = PRIVATE_KEY_LABEL;
  }

  if (content.indexOf(RSA_PRIVATE_KEY_LABEL) > -1) {
    title = RSA_PRIVATE_KEY_LABEL;
  }

  const regexp = new RegExp('-----BEGIN ' + title + '-----(.*)-----END ' + title + '-----');

  content = content.replace(/\n/g, '');
  content = regexp.exec(content) || [];
  content = content[1].split('');
  content = chop(content, 76);
  content = content.map(line => line.join('')).join('\n');

  return '-----BEGIN ' + title + '-----\n' + content + '\n' + '-----END ' + title + '-----';
}

function chop(array, quantity) {
  const result = [];
  let subArray = [];
  let count = 0;

  array.forEach(element => {
    if (count === quantity) {
      result.push(subArray);
      subArray = [];
      count = 0;
    }

    subArray.push(element);
    count++;
  });

  if (subArray.length > 0) result.push(subArray);

  return result;
};

module.exports = removeBagAttributes;