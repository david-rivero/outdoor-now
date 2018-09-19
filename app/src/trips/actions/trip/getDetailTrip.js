export default function getDetailTrip (tripId) {
  return {
    type: 'GET_DETAIL_TRIP',
    payload: {
      tripId: tripId
    }
  }
}
