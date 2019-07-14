<template>
  <div>
    <v-btn color="primary" @click="() => searchByLocation($store)"
      >Find Restaurant Near Me</v-btn
    >
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
<style scoped>
* {
  text-align: center;
}

.button {
  height: 500px;
}
</style>
