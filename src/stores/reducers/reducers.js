import { combineReducers } from 'redux';

import coords from './coords';
import trips from './trips';
import profiles from './profiles';
import displayMenuMapOnSetLocation from './displayMenuMapOnSetLocation';
import locations from './locations';

const reducers = combineReducers({
  coords,
  trips,
  profiles,
  displayMenuMapOnSetLocation,
  locations
});

export default reducers;
