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
    const restaurantData = await axios
      .get(`/api/places/`)
      .then(res => {
        return res.data
      })
      .catch(err => {
        alert('_id.vue:', err)
      })

    store.commit('UPDATE_PLACES', restaurantData)
  },
  mounted() {},
  methods: {
    getPictureUrl: function(reference) {
      if (reference.hasOwnProperty('photos')) {
        return `https://maps.googleapis.com/maps/api/place/photo?photoreference=${
          reference.photos[0].photo_reference
        }&sensor=false&maxheight=400&maxwidth=600&key=${akey.key}`
      }
      return `/images/NO_PHOTO.png`
    },
    googleMapLink(place) {
      const lat = place.geometry.location.lat
      const lng = place.geometry.location.lng
      const id = place.reference
      return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}&query_place_id=${id}`
    }
  }
}
</script>
