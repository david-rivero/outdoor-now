export default function unsetLocation (indexLocation) {
  return {
    type: 'UNSET_LOCATION',
    payload: {
      indexLocation: indexLocation
    }
  }
}
