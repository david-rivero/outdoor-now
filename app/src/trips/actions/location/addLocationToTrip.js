export default function addLocationToTrip (locations, typeLocation) {
  let actionType = null;
  let actionLocation = {
    type: "",
    payload: {}
  };

  if (typeLocation == "locationOrigin") {
    actionType = "ADD_ORIGIN_TO_TRIP";
    actionLocation.payload[typeLocation] = locations[0];
  } else if (typeLocation == "locationDestination") {
    actionType = "ADD_DESTINATION_TO_TRIP";
    actionLocation.payload[typeLocation] = locations[0];
  } else if (typeLocation == "checkpoints") {
    actionType = "ADD_CHECKPOINT_TO_TRIP";
    actionLocation.payload[typeLocation] = locations;
  }

  actionLocation.type = actionType;
  return actionLocation;
}
