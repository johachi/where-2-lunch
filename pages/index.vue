<template>
  <div>
    <h1>Search Places Near</h1>
    <br />
    <form @submit.prevent="submit">
      <input v-model="search" placeholder="Place" autofocus />
    </form>
    <div>
      or
    </div>
    <v-btn small color="primary" @click="searchByLocation"
      >Current Location
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: ''
    }
  },
  methods: {
    submit(event) {
      this.$router.push(`results/${this.search}`)
    },
    searchByLocation() {
      navigator.geolocation.getCurrentPosition(position => {
        this.$router.push(
          `results/${position.coords.latitude},${position.coords.longitude}`
        )
      })
    }
  }
}
</script>
<style scoped>
* {
  text-align: center;
}

h1 {
  padding: 20px;
}
</style>
