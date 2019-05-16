export const state = () => ({
  places: ['hello']
})

export const mutations = {
  UPDATE_PLACES(state, newPlaces) {
    state.places = newPlaces
  }
}
