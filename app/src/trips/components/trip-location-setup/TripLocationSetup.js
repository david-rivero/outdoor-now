import React from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';

import config from '../../../shared/config';

import TripLocationItem from '../trip-location-item/TripLocationItem';
import TripLocationMenu from './trip-location-menu/TripLocationMenu';

import './TripLocationSetup.css';

export default class TripLocationSetup extends React.Component {
  /*
    Props:
    - locationMode
    - trip
    - propertyKey
  */

  constructor (props) {
    super(props);
    this.state = {
      mode: props.mode,
      locations: [],
      trip: props.trip,
      propertyKey: props.propertyKey,
      displayMenu: false,
      coords: {
        lat: -34.397,
        lng: 150.644
      }
    };
  }

  clickMap = (ev) => {
    this.setState({
      coords: {
        lat: ev.lat,
        lng: ev.lng
      },
      displayMenu: !this.state.displayMenu
    });
  }

  addLocation = (coords, ev) => {
    ev.preventDefault();
    let prevLocations = [];

    if (this.state.mode === 'MULTIPLE_LOCATIONS') {
      Object.assign(prevLocations, this.state.locations);
    }

    prevLocations.push({
      name: "Any location",
      coords: {
        lat: coords.lat,
        lng: coords.lng
      }
    });
    this.setState({
      locations: prevLocations
    });
  }

  removeLocation (indexLocation, ev) {
    ev.preventDefault();
    let prevLocations = [];
    Object.assign(prevLocations, this.state.locations);

    if (this.state.mode === 'MULTIPLE_LOCATIONS' && indexLocation) {
      prevLocations.splice(indexLocation, 1);
    } else {
      prevLocations.pop();
    }

    this.setState({
      locations: prevLocations
    });
  }

  saveLocation () {

  }

  render () {
    return (
      <div className="trip-location-view">
        <div className="trip-location-search">
        </div>
        <div className="trip-location-map" style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact bootstrapURLKeys={{ key: config.GOOGLE_MAPS_API_KEY }}
                        defaultCenter={{ lat: -34.397, lng: 150.644 }}
                        defaultZoom={8} onClick={this.clickMap} onDragEnd={this.clickMap}>
              <TripLocationMenu onSelectLocation={(e) => this.addLocation(this.state.coords, e)} 
                                singleLocation={this.state.mode === 'SINGLE_LOCATION'}
                                multipleLocations={this.state.mode === 'MULTIPLE_LOCATIONS'} 
                                displayTripMenu={this.state.displayMenu}
                                {...this.state.coords} />
          </GoogleMapReact>
        </div>
        <div className="location-selected">
         {
            this.state.mode === 'MULTIPLE_LOCATIONS' && this.state.locations.length &&
            this.state.locations.map((location, index) => {
              return (<TripLocationItem onClickRemove={(e) => this.removeLocation(index, e)} location={location} key={index} />)
            })
          }
          {
            this.state.mode === 'SINGLE_LOCATION' && this.state.locations.length &&
            <TripLocationItem onClickRemove={(e) => this.removeLocation(null, e)} location={this.state.locations[0]} />
          }
        </div>
        <div>
          <button className="btn" type="submit" onClick={this.saveLocation}>Save location</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state, props) {
  return {};
}

// export default connect(mapStateToProps)(TripLocationSetup);
