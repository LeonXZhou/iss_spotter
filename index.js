const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss.js');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
//   fetchCoordsByIP(ip, (error, coordinates) => {
//     if (error) {
//       console.log("It didn't work!", error);
//       return;
//     }
//     console.log('coordinates:', coordinates);
//     fetchISSFlyOverTimes(coordinates, (error,flybytime) => {
//       if (error) {
//         console.log("It didn't work!", error);
//         return;
//         console.log('upcoming fly over times', flybytime);
//       }
//     })
//   });
// })
