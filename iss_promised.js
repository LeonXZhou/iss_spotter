const request = require('request-promise-native');
const ipurl = 'https://api.ipify.org?format=json';
const geourl = 'https://api.freegeoip.app/json/';
const fetchMyIP = function (callback) {
  return request(ipurl);
};

const fetchCoordsByIP = function (body) {
  const ip = JSON.parse(body).ip;
  return request(geourl + `/${ip}?apikey=f947d540-3def-11ec-b8af-5d57dd876d90`);
};

const fetchISSFlyOverTimes = function (body) {
  const coords = JSON.parse(body);
  return request(`https://iss-pass.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`);
}

const nextISSTimesForMyLocation = function () {
  fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((body) => {
      const flybytime = JSON.parse(body).response
      for (fly of flybytime) {
        console.log(`Next pass at ${Date(fly.risetime)} for ${fly.duration} seconds!`)
      }
    })
    .catch((err)=>console.log('Error:', err));
}

module.exports = { nextISSTimesForMyLocation};