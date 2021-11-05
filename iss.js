const request = require('request');
const ipurl = 'https://api.ipify.org?format=json';
const fetchMyIP = function(callback) {
  request(ipurl, (error, response, data) => {
    if (error) {
      callback(error,null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${data}`;
      callback(Error(msg), null);
      return;
    }

    if (error === null && response.statusCode === 200) {
      const ip  = JSON.parse(data).ip;
      callback(error, ip);
    }

  });
};

module.exports = { fetchMyIP };