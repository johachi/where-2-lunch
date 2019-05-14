<template>
  <div>
    <h1>
      Hellow From Results Route {{$route.params.id}}
    </h1>
  </div>
</template>

<script>
import axios from 'axios'
import akey from './googleapi.js'
export default {
  mounted() {
    //alert($route.params.p)
  },
  fetch ({ app, store }) {
    return axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=35.6582788,139.7273854&radius=50&types=restaurant&key=${akey.key}`,
    { headers: { 'Access-Control-Allow-Origin': '*' }}
    )
    .then((res) => {
      console.log("worked")
      console.log(res.data.results)
    })
    .catch(err => {
      console.log('Mm', err)
    })
  },
  //middleware: 'search'
}
</script>
