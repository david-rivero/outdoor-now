export default function updateValueField (field, valueField) {
  return {
    type: 'UPDATE_VALUE_ON_TRIP',
    payload: {
      field: field,
      valueField: valueField
    }
  }
}
