//API Key Forecast: ba43cfa3bc4ac4b08540c7ccd0274b97

const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if(errorMessage){
    console.log(errorMessage);
  }else{
    console.log(`My address is: ${results.address}`);
    weather.getWeather(results.latitude,results.longitude, (errorMessage, weatherResults) => {
      if(errorMessage){
        console.log(errorMessage);
      }else{
        console.log(`Tonight it's so fucking hot!The thermometer points ${weatherResults.temperature} but it's feel like ${weatherResults.apparentTemperature}!`);
      }
    });
  }
});



