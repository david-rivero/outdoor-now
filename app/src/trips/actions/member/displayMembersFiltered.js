export default function displayMembersFiltered (textSearch) {
  return {
    type: 'DISPLAY_MEMBERS_FILTERED',
    payload: {
      textSearch
    }
  }
}
