//API Key Forecast: ba43cfa3bc4ac4b08540c7ccd0274b97

const yargs = require('yargs');
const axios = require('axios');

const argv = yargs.
  options({
    address: {
      demand: true,
      alias: 'a',
      describe: 'Address to fetch weather for',
      string: true,
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

  var addressAPI = encodeURIComponent(argv.address);
  var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressAPI}`;

  axios.get(geocodeUrl).then((response) => {
      if(response.data.status === 'ZERO_RESULTS'){
          throw new Error('Unable to find that address');
      }

      var latitude = response.data.results[0].geometry.location.lat;
      var longitude = response.data.results[0].geometry.location.lng;
      var weatherUrl = `https://api.darksky.net/forecast/ba43cfa3bc4ac4b08540c7ccd0274b97/${latitude},${longitude}`;

      console.log(response.data.results[0].formatted_address);
      return axios.get(weatherUrl);
  }).then((response) => {
      var temperature = response.data.currently.temperature;  
      var apparentTemperature = response.data.currently.apparentTemperature;  
      console.log(`Today is fucking hot. It's only ${temperature} but it feels like ${apparentTemperature}`);
  }).catch((error) => {
      if(error.code === 'ENOTFOUND'){
        console.log('Unable to connect to API servers.');
      }else{
          console.log(error.message);
      }
  });