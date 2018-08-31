import React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';

const mapsSrc = "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places";
const TripMap = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    className="trip-map"
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
  </GoogleMap>
));

export default class TripLocationSetup extends React.Component {
  render () {
    return (
      <div className="trip-location-view">
        <div className="trip-location-search">
        </div>
        <div>
          <TripMap googleMapURL={mapsSrc} 
                   loadingElement={<div style={{ height: `calc(100vh - 100px)` }} />}
                   containerElement={<div style={{ height: `100%` }} />}
                   mapElement={<div style={{ height: `100%` }} />} />
        </div>
        <div className="location-selected"></div>
      </div>
    );
  }
}
