const express = require('express')
const app = express()
const googleMaps = require('@google/maps')
const akey = require('./googleapi')

const googleMapsClient = googleMaps.createClient({
  key: akey.key,
  Promise: Promise
})

app.get('/places', async function(req, res, next) {
  const digi = await googleMapsClient
    .placesNearby({
      type: 'restaurant',
      location: {
        lat: 35.6582788,
        lng: 139.7273854
      },
      radius: 100
    })
    .asPromise()

  res.send(digi.json.results)
})
// TODO: Make below get the picture to forward to client
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
    .catch(() => {
      res.send('serverError, index.js:')
    })
})

module.exports = {
  path: '/api/',
  handler: app
}
