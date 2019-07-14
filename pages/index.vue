<template>
  <div>
    <v-btn
      class="search_button"
      color="primary"
      @click="() => searchByLocation($store)"
    >
      Find Restaurant <br />
      Near Me
    </v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    submit(event) {
      this.$router.push(`results/${this.search}`)
    },
    searchByLocation(store) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords
        store.commit('SET_USER_LOCATION', {
          lat: latitude,
          lng: longitude
        })
        this.$router.push(`results?lat=${latitude}&lng=${longitude}`)
      })
    }
  }
}
</script>
<style>
* {
  text-align: center;
}
.search_button {
  height: 70px;
  font-size: 1pc;
  margin-top: 20%;
}
.v-content__wrap {
  background: url('https://images.pexels.com/photos/1087897/pexels-photo-1087897.jpeg');
  background-size: cover;
}
</style>
