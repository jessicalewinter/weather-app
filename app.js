const request =  require('request');
//reqeuest
request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=Central%20Park%20New%20York&key=AIzaSyBjMzXbmGTwhTPT5zB1ytzilPZNjguTpzg',
  json: true,
}, (error, response, body) => {
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`)
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`)
});
