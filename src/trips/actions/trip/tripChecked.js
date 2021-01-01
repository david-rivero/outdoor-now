export default function tripChecked (checked) {
  return {
    type: 'TRIP_CHECKED',
    payload: {
      checked: checked
    }
  }
}
