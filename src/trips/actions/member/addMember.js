export default function addMemberToTrip (member) {
  return {
    type: 'SELECT_MEMBER',
    payload: {
      member: member
    }
  };
}
