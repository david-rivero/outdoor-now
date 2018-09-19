export default function checkLocationsSaved (checked) {
  return {
    type: 'CHECK_LOCATIONS_SAVED',
    payload: {
      checked: checked
    }
  }
}
