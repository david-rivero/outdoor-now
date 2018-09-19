export default function getTrips (trips) {
  return {
    type: 'GET_TRIPS',
    payload: {
      trips: trips
    }
  }
}
