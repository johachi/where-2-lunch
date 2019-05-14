<template>
  <div>
    <h1>
      Hellow From Results Route {{$route.params.id}}
    </h1>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  mounted() {
    //alert($route.params.p)
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
  middleware: 'search'
}
</script>
