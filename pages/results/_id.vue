<template>
  <div>
    <h1>
      Hellow From Results Route {{$route.params.id}}
    </h1>
  </div>
</template>

<script>
//import axios from 'axios'
import akey from './googleapi.js'
export default {
  mounted() {
    //alert($route.params.p)
  },
  asyncData ({ app }) {
    return app.$axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=100&types=restaurants&name=harbour&key=${akey.key}`,
    { headers: { 'Access-Control-Allow-Origin': '*' }})
    .then((res) => {
      console.log(res)
    })
    .catch(err => {
      console.log('Mm', err)
    })
  },
  // async fetch({params, store}){
  //   const result = await axios
  //     .get(
  //     `/api/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=100&types=restaurants&name=harbour&key=${
  //       akey.key
  //     }`,
  //     { headers: { 'Access-Control-Allow-Origin': '*' } }
  //   )
  //   .catch(error => 'still not working')
  //   console.log(result);
  // }
  //middleware: 'search'
}
</script>
