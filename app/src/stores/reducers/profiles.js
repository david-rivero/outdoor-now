let initialState = {
  currentUser: {},
  members: [],
  membersFound: [], 
  displayResult: false,
  saveCheck: false
};

export default function profiles (state=initialState, action) {
  let copyState = {...state};
  switch (action.type) {
    case 'CHECK_MEMBERS_SAVED':
      return {...copyState, saveCheck: action.payload.checked};
    case 'LOGIN':
      return {...copyState, currentUser: action.payload.user};
    case 'HIDE_MEMBER_RESULTS':
      return {...copyState, displayResult: false};
    case 'DISPLAY_MEMBERS_FILTERED':
      if (action.payload.textSearch) {
        let membersFiltered = state.membersFound.filter((member) => {
          return member.name.indexOf(action.payload.textSearch) !== -1;
        });
        return {
          ...copyState,
          membersFound: membersFiltered,
          displayResult: true
        };
      }
      return state;
    case 'RESET_MEMBERS':
      return {...copyState, members: [], membersFound: []};
    case 'LOAD_PROFILES':
      if (action.payload.members && action.payload.members.length) {
        copyState.members = action.payload.members;
      }
      return {...copyState, membersFound: action.payload.profiles};
    case 'SELECT_MEMBER':
      copyState.members.push(action.payload.member);
      return copyState;
    case 'REMOVE_MEMBER_FROM_TRIP':
      return {...copyState, members: copyState.members.filter((_, index) => index !== action.payload.memberIndex)};
    default:
      return state;
  }
}
