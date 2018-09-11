import React from 'react';

import parseDate from '../../../shared/behavior/dateParser';
import trips from '../../../shared/mocks/trips.json';

import logo from '../../../shared/icons/outdoor-now.svg';
import marker from '../../../shared/icons/maps-and-flags.svg';
import flag from '../../../shared/icons/flag-map-marker.svg';
import profile from '../../../shared/icons/users.svg';

import './TripInfo.css';

export default function TripInfo (props) {
  let trip = trips[props.match.params.id -1];

  return (
    <div className="trip-info-container">
      <div className="trip-info-name">
        <figure className="trip-info-logo">
          <img src={logo} alt="Logo" />
        </figure>
        <h3>{ trip.name }</h3>
      </div>
      <div className="trip-info-detail">
        <div className="trip-info-item trip-info-origin">
          <figure className="trip-info-icon">
            <img src={marker} alt="Origin" />
          </figure>
          <span>Origin: { trip.locationOrigin.name }</span>
        </div>
        <div className="trip-info-item trip-info-destination">
          <figure className="trip-info-icon">
            <img src={marker} alt="Destination" />
          </figure>
          <span>Destination: { trip.locationDestination.name }</span>
        </div>
        <div className="trip-info-item trip-info-checkpoints">
          <figure className="trip-info-icon">
            <img src={flag} alt="Checkpoints" />
          </figure>
          <span>{ trip.breakpoints.length } checkpoints</span>
        </div>
        <div className="trip-info-item trip-info-members">
          <figure className="trip-info-icon">
            <img src={profile} alt="Members" />
          </figure>
          <span>{ trip.members.length } members</span>
        </div>
        <div className="trip-info-date">
          <span>{ parseDate(trip.datetime) } - { trip.timeDuration } hours</span>
        </div>
      </div>
    </div>
  );
}
