import React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';
import './MapView.css';

const MapView = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    className="map-dashboard"
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
  </GoogleMap>
));

export default MapView;
