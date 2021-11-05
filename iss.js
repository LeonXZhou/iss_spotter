const request = require('request');
const ipurl = 'https://api.ipify.org?format=json';
const geourl = 'https://api.freegeoip.app/json/';
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


const fetchCoordsByIP = function(ip,callback) {
  request(geourl + `/${ip}?apikey=f947d540-3def-11ec-b8af-5d57dd876d90`, (error, response, data) => {
    if (error) {
      callback(error,null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching geo coordinates. Response: ${data}`;
      callback(Error(msg), null);
      return;
    }

    if (error === null && response.statusCode === 200) {
      const geo  = JSON.parse(data);
      callback(error, {longitude: Number(geo.longitude),latitude: Number(geo.latitude)});
    }

  });
};



module.exports = { fetchMyIP , fetchCoordsByIP};