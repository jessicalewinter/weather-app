const request = require('request');

var getWeather = (latitude, longitude, callback) => {

    request({
    url: `https://api.darksky.net/forecast/ba43cfa3bc4ac4b08540c7ccd0274b97/${latitude},${longitude}`,
    json: true, 
    },(error, response , body) => {
        if(!error && response.statusCode === 200){
        callback(undefined,{
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature,
            })
        }else{
        callback('Unable to fetch weather.');
        }
    });
};

module.exports = {
    getWeather: getWeather,
};