export default function selectLocationMap (coords) {
  return {
    type: 'SELECT_LOCATION_MAP',
    payload: {
      coords: coords
    }
  }
}
