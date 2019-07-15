<template>
  <div>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <h1>
          Where to eat:
        </h1>
      </v-flex>
    </v-layout>
    <div v-if="placesExist && fetchedPlaceData">
      <Card
        :place-name="$store.state.selectedPlace.name"
        :place-rating="$store.state.selectedPlace.rating"
        :place-address="$store.state.selectedPlace.vicinity"
        :place-picture="singlePhoto"
        :map-link-google="googleMapLink($store.state.selectedPlace)"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Card from '~/components/Card.vue'

export default {
  components: {
    Card
  },
  data() {
    return { singlePhoto: 'default', fetchedPlaceData: false }
  },
  computed: {
    placesExist() {
      return this.$store.state.places.length > 0
    }
  },

  async fetch({ app, store }) {
    const coordinates = store.state.userLocation

    const restaurantData = await axios
      .get(`/api/places?lat=${coordinates.lat}&lng=${coordinates.lng}`)
      .then(res => {
        return res.data
      })
      .catch(err => {
        alert('_id.vue:', err)
      })

    store.commit('UPDATE_PLACES', restaurantData)
  },
  mounted: async function() {
    if (
      !Object.prototype.hasOwnProperty.call(
        this.$store.state.selectedPlace.hasOwnProperty,
        'photos'
      )
    ) {
      this.singlePhoto = '/images/NO_PHOTO.png'
    } else {
      const photoReference = this.$store.state.selectedPlace.photos[0]
        .photo_reference
      const pictureURL = await axios.get(
        `/api/places/pictures?photoReference=${photoReference}`
      )
      this.singlePhoto = pictureURL.data
    }
    this.fetchedPlaceData = true
  },
  methods: {
    googleMapLink(place) {
      const lat = place.geometry.location.lat
      const lng = place.geometry.location.lng
      const id = place.reference
      return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}&query_place_id=${id}`
    }
  }
}
</script>
