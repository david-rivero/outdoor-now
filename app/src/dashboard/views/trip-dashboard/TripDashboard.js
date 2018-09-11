import React from 'react';
import { Link } from 'react-router-dom';

import TripListItem from '../../components/trip-list-item/TripListItem';

export default function TripDashBoard (props) {
  let tripDashboardStyle = {
    "margin": "150px 0 100px 0"
  };

  return (
    <div className="trip-dashboard" style={tripDashboardStyle}>
      {
        props.trips.map((trip) => {
          return (
            <Link to={`/trips/info/${trip.id}`} key={trip.id}>
              <TripListItem trip={trip}/>
            </Link>
          );
        })
      }
    </div>
  )
}
