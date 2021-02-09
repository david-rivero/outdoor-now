import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getDetailTrip from '../../actions/trip/getDetailTrip';

import parseDate from '../../../shared/behavior/dateParser';

import logo from '../../../shared/icons/outdoor-now.svg';
import marker from '../../../shared/icons/maps-and-flags.svg';
import flag from '../../../shared/icons/flag-map-marker.svg';
import profile from '../../../shared/icons/users.svg';

import './TripDetail.css';

class TripDetail extends React.Component {
  componentWillMount () {
    this.props.getDetailTrip(this.props.match.params.id);
  }

  render () {
    return (
      <div className="trip-info-container">
        {
          this.props.trip && this.props.trip.name &&
          <div>
            <div className="trip-info-name">
              <figure className="trip-info-logo">
                <img src={logo} alt="Logo" />
              </figure>
              <h3>{ this.props.trip.name }</h3>
            </div>
            <div className="trip-info-detail">
              <div className="trip-info-item trip-info-origin">
                <figure className="trip-info-icon">
                  <img src={marker} alt="Origin" />
                </figure>
                <span>Origin: { this.props.trip.locationOrigin.name }</span>
              </div>
              <div className="trip-info-item trip-info-destination">
                <figure className="trip-info-icon">
                  <img src={marker} alt="Destination" />
                </figure>
                <span>Destination: { this.props.trip.locationDestination.name }</span>
              </div>
              <div className="trip-info-item trip-info-checkpoints">
                <figure className="trip-info-icon">
                  <img src={flag} alt="Checkpoints" />
                </figure>
                <span>{ this.props.trip.checkpoints.length } checkpoints</span>
              </div>
              <div className="trip-info-item trip-info-members">
                <figure className="trip-info-icon">
                  <img src={profile} alt="Members" />
                </figure>
                <span>{ this.props.trip.members.length } members</span>
              </div>
              <div className="trip-info-date">
                <span>{ parseDate(this.props.trip.datetime) } - { this.props.trip.timeDuration } hours</span>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getDetailTrip: bindActionCreators(getDetailTrip, dispatch)
  }
}

function mapStateToProps (state) {
  return {
    trip: state.trips.currentTrip
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripDetail);
