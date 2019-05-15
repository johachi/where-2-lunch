<template>
  <div>
    <h1>
      Where to eat:
    </h1>
    <div v-if="placesExist">
      <Card 
      :placeName="$store.state.places[this.placeToGo].name"
      :placeRating="$store.state.places[this.togo].rating"
      :placeAddress="$store.state.places[this.togo].vicinity"
      :placePicture="getPictureUrl($store.state.places[this.togo].photos[0].photo_reference)"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import akey from './googleapi.js'
import Card from '~/components/Card.vue'

export default {
  mounted() {
  },
  async fetch ({ app, store }) {
    const data = await axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=35.6582788,139.7273854&radius=100&types=restaurant&key=${akey.key}`,
    { headers: { 'Access-Control-Allow-Origin': '*' }}
    )
    .then((res) => {
      console.log("Fetched places successfully")
      return res.data.results
    })
    .catch(err => {
      console.log("_id.vue:", err)
    })

    store.commit('UPDATE_PLACES', data)
  },
  components: {
    Card
  },
  data: function(){
    return {
      togo: 0
    }
  },
  methods: {
    getPictureUrl: (reference) => {
      return `https://maps.googleapis.com/maps/api/place/photo?photoreference=${reference}&sensor=false&maxheight=400&maxwidth=600&key=${akey.key}`
    },
    getPic: ($store) => {
      const reference = $store.state.places[this.togo].photos[0].photo_reference
      if ($store.state.places[this.togo].photos.length > 0) {
        return `https://maps.googleapis.com/maps/api/place/photo?photoreference=${reference}&sensor=false&maxheight=400&maxwidth=600&key=${akey.key}`
      }
      return `https://www.underconsideration.com/brandnew/archives/google_broken_image_04_time_aware.png`;
    }
  },
  computed: {
    placesExist(){
      return this.$store.state.places.length > 0;
    },
    placeToGo(){
      const maxnumber = this.$store.state.places.length;
      this.togo = Math.floor(Math.random() * Math.floor(maxnumber));
      return this.togo;
    }
  }
}
</script>
