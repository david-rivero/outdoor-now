export default function coords (state={lat: 0, lng: 0}, action) {
  switch (action.type) {
    case 'SELECT_LOCATION_MAP':
      return {...state, ...action.payload.coords};
    default:
      return state;
  }
}
