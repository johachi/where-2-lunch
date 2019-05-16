<template>
  <div>
    <h1>Search Places Near</h1>
    <br />
    <form @submit.prevent="submit">
      <input placeholder="Place" v-model="search" autofocus />
    </form>
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
