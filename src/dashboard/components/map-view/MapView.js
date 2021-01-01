import React from 'react';
import GoogleMapReact from 'google-map-react';

import config from '../../../shared/config';
import './MapView.css';

export default function MapView () {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact bootstrapURLKeys={{ key: config.GOOGLE_MAPS_API_KEY }}
                      defaultCenter={{ lat: -34.397, lng: 150.644 }}
                      defaultZoom={8}/>
    </div>
  );
}
