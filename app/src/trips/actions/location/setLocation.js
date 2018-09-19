export default function setLocation (location, modeLocation) {
  return {
    type: 'SET_LOCATION',
    payload: {
      location: location,
      type: modeLocation
    }
  }
}
