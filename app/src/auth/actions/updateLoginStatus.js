export default function updateLoginStatus (status) {
  return {
    type: 'UPDATE_LOGIN_STATUS',
    payload: {
      loginStatus: status
    }
  }
}
