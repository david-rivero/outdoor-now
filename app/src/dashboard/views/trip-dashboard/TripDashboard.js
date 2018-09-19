import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import getMultipleTrips from '../../actions/getMultipleTrips';
import TripListItem from '../../components/trip-list-item/TripListItem';

class TripDashBoard extends React.Component {
  render () {
    return (
      <div className="trip-dashboard" style={{"margin": "150px 0 100px 0"}}>
        {
          this.props.trips.map((trip) => {
            return (
              <a href={`/trips/info/${trip.id}`} key={trip.id}>
                <TripListItem trip={trip}/>
              </a>
            );
          })
        }
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getTrips: bindActionCreators(getMultipleTrips, dispatch)
  }
}

function mapStateToProps (state) {
  return {
    trips: state.trips.listOfTrips
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TripDashBoard);
