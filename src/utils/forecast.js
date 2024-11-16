const request = require('postman-request')


const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.weatherstack.com/current?access_key=20f02bd4872652f1931d69cd622e6045&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '&units=f'

    request(url, {json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to wether service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out.")
        }
    })
}

module.exports = forecast