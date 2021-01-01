import tripList from '../../shared/mocks/trips.json';

let initialState = {
  listOfTrips: tripList,
  currentTrip: {},
  tripCheck: false
};

export default function trips (state=initialState, action) {
  let copyState = {...state};
  switch (action.type) {
    case 'TRIP_CHECKED':
      copyState.tripCheck = action.payload.checked;
      break;
    case 'ADD_ORIGIN_TO_TRIP':
      copyState.currentTrip.locationOrigin = action.payload.locationOrigin;
      break;
    case 'ADD_DESTINATION_TO_TRIP':
      copyState.currentTrip.locationDestination = action.payload.locationDestination;
      break;
    case 'ADD_CHECKPOINT_TO_TRIP':
      copyState.currentTrip.checkpoints = [...action.payload.checkpoints];
      break;
    case 'SAVE_MEMBERS_ON_TRIP':
      copyState.currentTrip.members = action.payload.members;
      break;
    case 'CREATE_TRIP':
      copyState.listOfTrips.push(copyState.currentTrip);
      copyState.currentTrip = {};
      break;
    case 'GET_DETAIL_TRIP':
      let tripFiltered = copyState.listOfTrips.filter(trip => action.payload.tripId == trip.id);
      copyState.currentTrip = tripFiltered[0];
      break;
    case 'GET_TRIPS':
      copyState.listOfTrips = copyState.listOfTrips.concat(action.payload.trips);
      break;
    case 'INSTANCIATE_TRIP':
      copyState.currentTrip = action.payload.trip;
      break;
    case 'UPDATE_VALUE_ON_TRIP':
      copyState.currentTrip[action.payload.field] = action.payload.valueField;
      break;
    default:
      return state;
  }
  return copyState;
}
