export const state = () => ({
  places: [],
  selectedPlace: {}
})

export const mutations = {
  UPDATE_PLACES(state, newPlaces) {
    state.places = newPlaces

    const maxnumber = state.places.length
    const placeIndex = Math.floor(Math.random() * Math.floor(maxnumber))
    state.selectedPlace = state.places[placeIndex]
  },
  CHANGE_SELECTED_PLACES(state) {
    const maxnumber = state.places.length
    const placeIndex = Math.floor(Math.random() * Math.floor(maxnumber))
    state.selectedPlace = state.places[placeIndex]
  }
}
