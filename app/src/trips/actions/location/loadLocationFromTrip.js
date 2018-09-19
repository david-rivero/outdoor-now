export default function loadLocationFromTrip (locations) {
  let locationList = [];

  if (Array.isArray(locations)) {
    locationList = [...locations];
  } else {
    locationList = [locations];
  }

  return {
    type: 'LOAD_LOCATION_FROM_TRIP',
    payload: {
      locations: [...locationList]
    }
  };
}
