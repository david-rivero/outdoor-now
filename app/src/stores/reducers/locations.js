let initialState = {
  locationList: [],
  locationsSaved: false
};

export default function locations (state=initialState, action) {
  const copyState = {...state};
  switch (action.type) {
    case 'LOAD_LOCATION_FROM_TRIP':
      return {...copyState, locationList: [...action.payload.locations]};
    case 'RESET_LOCATIONS':
      return {...copyState, locationList: []}
    case 'SET_LOCATION':
      if (action.payload.type !== 'MULTIPLE_LOCATIONS' && copyState.locationList.length) { 
        copyState.locationList[0] = action.payload.location;
      } else {
        copyState.locationList.push(action.payload.location);
      }
      return copyState;
    case 'UNSET_LOCATION':
      if (copyState.locationList.length) {
        return {...copyState, locationList: copyState.locationList.filter((_, index) => index !== action.payload.indexLocation)};
      }
      return state;
    case 'CHECK_LOCATIONS_SAVED':
      return {...copyState, locationsSaved: action.payload.checked };
    default:
      return state;
  }
}
