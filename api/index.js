const express = require('express')
const app = express()
const googleMaps = require('@google/maps')

const API_KEY = process.env.GOOGLE_API_KEY

const googleMapsClient = googleMaps.createClient({
  key: API_KEY,
  Promise: Promise
})

app.get('/places', async function(req, res, next) {
  const nearbyRestaurants = await googleMapsClient
    .placesNearby({
      type: 'restaurant',
      location: {
        lat: req.query.lat,
        lng: req.query.lng
      },
      radius: 200
    })
    .asPromise()

  res.send(nearbyRestaurants.json.results)
})

app.get('/places/pictures', function(req, res, next) {
  const { photoReference } = req.query
  googleMapsClient
    .placesPhoto({
      maxwidth: 600,
      maxheight: 400,
      photoreference: photoReference
    })
    .asPromise()
    .then(response => {
      res.send(`https://${response.req.socket._host}${response.req.path}`)
    })
    .catch(error => {
      res.status().send(`serverError, index.js: ${error.message}`)
    })
})

module.exports = {
  path: '/api/',
  handler: app
}
