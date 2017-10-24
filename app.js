const request =  require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=Fortaleza',
  json: true,
}, (error, response,body) => {
  console.log(body);
});
