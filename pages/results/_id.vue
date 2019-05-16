<template>
  <div>
    <h1>
      Where to eat:
    </h1>
    <div v-if="placesExist">
      <Card
        :place-name="$store.state.selectedPlace.name"
        :place-rating="$store.state.selectedPlace.rating"
        :place-address="$store.state.selectedPlace.vicinity"
        :place-picture="getPictureUrl($store.state.selectedPlace)"
        :map-link-google="googleMapLink($store.state.selectedPlace)"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import akey from './googleapi.js'
import Card from '~/components/Card.vue'

export default {
  components: {
    Card
  },
  computed: {
    placesExist() {
      return this.$store.state.places.length > 0
    }
  },
  async fetch({ app, store }) {
    const data = await axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=35.6582788,139.7273854&radius=100&types=restaurant&key=${
          akey.key
        }`,
        { headers: { 'Access-Control-Allow-Origin': '*' } }
      )
      .then(res => {
        return res.data.results
      })
      .catch(err => {
        alert('_id.vue:', err)
      })

    store.commit('UPDATE_PLACES', data)
  },
  mounted() {},
  methods: {
    getPictureUrl: reference => {
      if (reference.hasOwnProperty('photos')) {
        return `https://maps.googleapis.com/maps/api/place/photo?photoreference=${
          reference.photos[0].photo_reference
        }&sensor=false&maxheight=400&maxwidth=600&key=${akey.key}`
      }
      return `/images/NO_PHOTO.png`
    },
    googleMapLink(coordinates) {
      const lat = coordinates.geometry.location.lat
      const lng = coordinates.geometry.location.lng
      return `http://www.google.com/maps/place/${lat},${lng}`
    }
  }
}
</script>
