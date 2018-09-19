export default function removeMemberFromTrip (index) {
  return {
    type: 'REMOVE_MEMBER_FROM_TRIP',
    payload: {
      memberIndex: index
    }
  }
}
