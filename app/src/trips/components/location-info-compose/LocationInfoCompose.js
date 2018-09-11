import React from 'react';
import GoogleMapReact from 'google-map-react';
import config from '../../../shared/config';

export default function LocationInfoCompose (props) {
  return (
    <div className="location-info-compose" style={{ height: '100vh', width: '100%' }}>
      <div className="location-info-compose-name">{ props.location.name }</div>
      <GoogleMapReact bootstrapURLKeys={{ key: config.GOOGLE_MAPS_API_KEY }}
                      defaultCenter={{ lat: -34.397, lng: 150.644 }}
                      defaultZoom={8}/>
    </div>
  );
}
