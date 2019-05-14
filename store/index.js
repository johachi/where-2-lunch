export const state = () => ({
  places: ['hello']
})

export const mutations = () => ({
  update: function(state, places) {
    state.places = places
  }
})
