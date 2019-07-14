export const state = () => ({
  places: [],
  selectedPlace: {},
  userLocation: {}
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
  },
  SET_USER_LOCATION(state, location) {
    const lat = location.lat
    const lng = location.lng

    state.userLocation = { lat, lng }
  }
}
