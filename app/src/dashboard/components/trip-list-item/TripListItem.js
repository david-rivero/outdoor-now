import React from 'react';
import moment from 'moment';
import './TripListItem.css';

function parseDate (date) {
  return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}

export default function TripListItem (props) {
  let tripItemBk = {
    backgroundImage: `url(${props.trip.pictTrip})`
  };

  return (
    <div className="trip-item">
      <div className="trip-item-info">
        <div className="trip-item-name"><p>{ props.trip.name }</p></div>
        <div className="trip-item-overview">
          <div className="trip-item-locations">
            <span>{ props.trip.locationOrigin.name }</span><span> - </span><span>{ props.trip.locationDestination.name }</span>
          </div>
          <div className="trip-item-members">
            <span>{ props.trip.members.length } members</span><span> - </span><span>{ parseDate(props.trip.datetime) }</span>
          </div>
        </div>
      </div>
      <div className="trip-item-pict" style={tripItemBk}>
      </div>
    </div>
  )
}
