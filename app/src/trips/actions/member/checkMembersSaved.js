export default function checkMembersSaved (checked) {
  return {
    type: 'CHECK_MEMBERS_SAVED',
    payload: {
      checked: checked
    }
  }
}
