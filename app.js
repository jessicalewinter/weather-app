const request =  require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=%20Rio%20de%20Janeiro',
  json: true,
}, (error, response, body) => {
  console.log(JSON.stringify(body,undefined, 2));
});
