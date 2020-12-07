const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3f71edbbd5237151846a6aca674e087f&query=' + latitude + ',' + longitude+'&units=f'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log()
            callback(undefined, 'It is currently '+response.body.current.temperature+
                                                  ' in '+ response.body.location.name+', '+
                                                   response.body.location.region)
            
            //.daily.data[0].summary)
                //+ ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
        }
    })
}


module.exports = forecast

