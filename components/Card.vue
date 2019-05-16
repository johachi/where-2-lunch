<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card target="_blank" :href="mapLinkGoogle">
        <v-img
          class="white--text"
          height="200px"
          :src="placePicture"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">{{placeName}}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <span class="grey--text">Rating: {{placeRating}}</span><br>
            <span>{{placeAddress}}</span>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  props: {
    placeName: {
      type: String
    },
    placeAddress: {
      type: String
    },
    placeRating: {
      type: Number
    },
    placePicture: {
      type: String
    },
    mapLinkGoogle: {
      type: String
    }
  }
}
</script>
<style lang="stylus" scoped>
.headline{
  font-weight: bold;
}
</style>
