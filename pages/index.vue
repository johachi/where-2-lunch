<template>
  <div>
    <h1>Search Place Near</h1>
    </br>
    <form @submit.prevent="submit">
      <input placeholder="Enter Coordinates" v-model="search" autofocus />
    </form>
  </div>
  <!-- <v-layout column justify-center align-center>

  </v-layout> -->
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {
      search: ''
    }
  },
  methods: {
    submit(event){
      this.$router.push(`results/${this.search}`);
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

