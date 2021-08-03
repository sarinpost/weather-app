const request = require('postman-request')

// const url1 = "http://api.weatherstack.com/current?access_key=a97003635def866626b7144ece6bc89d&query=37.83,-122.42&units=f"
// request({
//     url: url1,
//     json: true,
// }, (error, response) => {
//     const current = response.body.current
//     console.log(current.weather_descriptions[0] + ". It is currently " + current.temperature + " degrees out. It feels like " + current.feelslike)
// })

const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2FyaW5wb3N0IiwiYSI6ImNrcncxdWIyMTBjYjUyb25wZWg1NXlqeW0ifQ.8TJjQZZrCsbkUFuwcnq80A&limit=1"
request({
    url: geocodeURL,
    json: true,
}, (error, response) => {
    const [longitude, latitude] = response.body.features[0].center
    console.log(latitude, longitude);
})