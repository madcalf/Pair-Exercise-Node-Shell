const request = require('request');

module.exports = function (url) {
  request(url, (error, response, body) => {
    console.error('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
    process.stdout.write('\n\nprompt >');
  });
};
