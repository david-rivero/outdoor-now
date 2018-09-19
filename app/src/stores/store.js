import { createStore } from 'redux';
import reducers from './reducers/reducers';

import trips from '../shared/mocks/trips';
import profiles from '../shared/mocks/profiles';

import { setInfoOnStorage, getInfoFromStorage } from '../shared/behavior/localstorageUtil'; 

let initialState = {
  trips: {
    listOfTrips: [...trips],
    currentTrip: {},
    tripCheck: false
  },
  locations: {
    locationList: [],
    locationsSaved: false
  },
  coords: {
    lat: 0,
    lng: 0
  },
  displayMenuMapOnSetLocation: false,
  profiles: {
    currentUser: {},
    members: [],
    membersFound: [...profiles], 
    displayResult: false,
    saveCheck: false
  }
};

if (getInfoFromStorage('state')) {
  initialState = JSON.parse(getInfoFromStorage('state'));
}

const outdoorAppStore = createStore(reducers, initialState);
outdoorAppStore.subscribe(() => {
  if (!getInfoFromStorage('state')) {
    setInfoOnStorage('state', JSON.stringify(outdoorAppStore.getState()));
  }
});
export default outdoorAppStore;
