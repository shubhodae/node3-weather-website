const request = require('postman-request')


const geocode = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=4ce4e4ba5c13478fe853d2af112b88c8&query=' + encodeURIComponent(address)

    request(url, {json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.length == 0) {
            callback('Unable to find location', undefined)
        } else {
            console.log(body)
            try {
                const data = body.data[0]
                const {latitude, longitude, label: location} = data
                callback(undefined, {latitude, longitude, location})
            } catch {
                callback()
            }
        }
    })
}

module.exports = geocode