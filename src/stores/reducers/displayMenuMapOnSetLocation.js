export default function displayMenuMapOnSetLocation (state=false, action) {
  switch (action.type) {
    case 'DISPLAY_MENU_MAP':
      return true;
    case 'HIDE_MENU_MAP':
      return false;
    default:
      return state;
  }
}
