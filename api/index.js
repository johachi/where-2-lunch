const express = require('express')
const app = express()
const axios = require('axios')
const akey = require('../pages/results/googleapi')

app.get('/', async function(req, res, next) {
  const data = await axios
    .get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=35.6582788,139.7273854&radius=100&types=restaurant&key=${
        akey.key
      }`,
      { headers: { 'Access-Control-Allow-Origin': '*' } }
    )
    .then(res => {
      return res.data.results
    })
    .catch(() => {
      return 'Error'
    })

  res.send(data)
})

app.get('/hi', function(req, res, next) {
  res.send('obj')
})

module.exports = {
  path: '/api/',
  handler: app
}
