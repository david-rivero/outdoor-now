import React from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import addLocationToTrip from '../../actions/location/addLocationToTrip';
import setLocation from '../../actions/location/setLocation';
import unsetLocation from '../../actions/location/unsetLocation';
import selectLocationMap from '../../actions/location/selectLocationMap';
import displayMenuMap from '../../actions/location/displayMenuMap';
import hideMenuMap from '../../actions/location/hideMenuMap';
import checkLocationsSaved from '../../actions/location/checkLocationsSaved';
import loadLocationFromTrip from '../../actions/location/loadLocationFromTrip';

import config from '../../../shared/config';

import TripLocationItem from '../trip-location-item/TripLocationItem';
import TripLocationMenu from './trip-location-menu/TripLocationMenu';

import './TripLocationSetup.css';

class TripLocationSetup extends React.Component {
  componentWillMount = () => {
    let allowLoadedLocations = (
      (this.props.mode === 'MULTIPLE_LOCATIONS' && this.props.trip[this.props.propertyKey].length) ||
      (this.props.mode === 'SINGLE_LOCATION' && this.props.trip[this.props.propertyKey] && this.props.trip[this.props.propertyKey].name.length));


    if (allowLoadedLocations) {
      this.props.loadLocationFromTrip(this.props.trip[this.props.propertyKey]);
    }
  }

  clickMap = (ev) => {
    let coords = {
      lat: ev.lat,
      lng: ev.lng
    };
    this.props.selectLocationMap(coords);
    if (this.props.displayMenuMapOnSetLocation) {
      this.props.hideMenuMap();
    } else {
      this.props.displayMenuMap();
    }
  }

  addLocation = (coords, ev) => {
    ev.preventDefault();
    this.props.hideMenuMap();
    this.props.setLocation({
      name: "Location name",
      coords: coords
    }, this.props.mode);
  }

  removeLocation = (indexLocation, ev) => this.props.unsetLocation(indexLocation)

  saveLocation = () => {
    this.props.addLocationToTrip(
      this.props.locations, this.props.propertyKey);
    this.props.checkLocationsSaved(true);
  }

  render () {
    return (
      <div className="trip-location-view">
      {
        !this.props.locationsSaved &&
        <div>
          <div className="trip-location-search">
          </div>
          <div className="trip-location-map" style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact bootstrapURLKeys={{ key: config.GOOGLE_MAPS_API_KEY }}
                          defaultCenter={{ lat: -34.397, lng: 150.644 }}
                          defaultZoom={8} onClick={this.clickMap} onDragEnd={this.clickMap}>
                <TripLocationMenu onSelectLocation={(e) => this.addLocation(this.props.coords, e)} 
                                  singleLocation={this.props.mode === 'SINGLE_LOCATION'}
                                  multipleLocations={this.props.mode === 'MULTIPLE_LOCATIONS'} 
                                  displayTripMenu={this.props.displayMenuMapOnSetLocation}
                                  {...this.props.coords} />
            </GoogleMapReact>
          </div>
          <div className="location-selected">
          {
              this.props.mode === 'MULTIPLE_LOCATIONS' && this.props.locations.length &&
              this.props.locations.map((location, index) => {
                return (<TripLocationItem onClickRemove={(e) => this.removeLocation(index, e)} location={location} key={index} />)
              })
            }
            {
              this.props.mode === 'SINGLE_LOCATION' && this.props.locations.length &&
              <TripLocationItem onClickRemove={(e) => this.removeLocation(0, e)} location={this.props.locations[0]} />
            }
          </div>
          <div className="save-location-trip-submit">
            <button className="btn" type="submit" onClick={this.saveLocation}>Save location</button>
          </div>
        </div>
      }
      {
        this.props.locationsSaved && (
          <Redirect to="/trips/create"></Redirect>
        )
      }
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addLocationToTrip: bindActionCreators(addLocationToTrip, dispatch),
    setLocation: bindActionCreators(setLocation, dispatch),
    unsetLocation: bindActionCreators(unsetLocation, dispatch),
    selectLocationMap: bindActionCreators(selectLocationMap, dispatch),
    displayMenuMap: bindActionCreators(displayMenuMap, dispatch),
    hideMenuMap: bindActionCreators(hideMenuMap, dispatch),
    checkLocationsSaved: bindActionCreators(checkLocationsSaved, dispatch),
    loadLocationFromTrip: bindActionCreators(loadLocationFromTrip, dispatch)
  }
}

function mapStateToProps (state) {
  return {
    locations: state.locations.locationList,
    coords: state.coords,
    displayMenuMapOnSetLocation: state.displayMenuMapOnSetLocation,
    locationsSaved: state.locations.locationsSaved,
    trip: state.trips.currentTrip
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TripLocationSetup);
