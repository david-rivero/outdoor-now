export default function saveMembersOnTrip (members) {
  return {
    type: 'SAVE_MEMBERS_ON_TRIP',
    payload: {
      members: members
    }
  }
}
