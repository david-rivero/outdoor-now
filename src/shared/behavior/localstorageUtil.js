export function setInfoOnStorage (name, data) {
  if (localStorage && !localStorage.getItem(name)) {
    localStorage.setItem(name, data);
  }
}

export function getInfoFromStorage (name) {
  localStorage.getItem(name);
}
