import React from 'react';

import cross from '../../../shared/icons/cross.svg';
import './TripLocationItem.css';

export default function TripLocationItem (props) {
  return (
    <div className="trip-location-item">
      <div className="trip-location-name">{ props.location.name }</div>
      <div className="trip-location-coords">
        { parseFloat(props.location.coords.lat).toFixed(2) }, { parseFloat(props.location.coords.lng).toFixed(2) }
      </div>
      <figure className="trip-location-remove" onClick={props.onClickRemove}>
        <img src={cross} alt="Remove location" />
      </figure>
    </div>
  );
}
