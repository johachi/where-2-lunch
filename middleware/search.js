/* eslint-disable no-console */
import axios from 'axios'

export default async function({ params }, store) {
  const result = await axios
    .get(
      '/api/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=100&types=restaurants&name=harbour&key=AIzaSyBUwMlzYRQE1Qw-3S9xq5WyUJtGaoud_rQ',
      { headers: { 'Access-Control-Allow-Origin': '*' } }
    )
    .catch(error => {
      console.log(error)
      return 'still not working'
    })
  console.log(result)
}
