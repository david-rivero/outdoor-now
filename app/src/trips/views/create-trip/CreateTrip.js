import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import instanciateTrip from '../../actions/trip/instanciateTrip';

import TripForm from '../../components/trip-form/TripForm';
import TripMembersAdd from '../../components/trip-members-add/TripMembersAdd';
import TripLocationSetup from '../../components/trip-location-setup/TripLocationSetup';

import './CreateTrip.css';

import logo from '../../../shared/icons/outdoor-now.svg';

class CreateTrip extends React.Component {
  componentWillMount () {
    this.props.instanciateTrip();
  }

  render () {
    let locationsSetup = {
      origin: {
        locationMode: 'SINGLE_LOCATION',
        propertyKey: 'locationOrigin'
      },
      destination: {
        locationMode: 'SINGLE_LOCATION',
        propertyKey: 'locationDestination'
      },
      checkpoints: {
        locationMode: 'MULTIPLE_LOCATIONS',
        propertyKey: 'checkpoints'
      }
    };

    return (
      <div className="create-trip-view">
        <figure className="create-trip-logo">
          <img src={logo} alt="Logo" />
          <figcaption>New Trip</figcaption>
        </figure>
        <div className="create-trip-form-container">
          <Router>
            <Switch>
              <Route path={`${this.props.match.path}/origin`} render={(_) => (
                <TripLocationSetup mode={locationsSetup.origin.locationMode} 
                                   propertyKey={locationsSetup.origin.propertyKey}
                                   trip={this.props.trip} />
              )} />
              <Route path={`${this.props.match.path}/destination`} render={(_) => (
                <TripLocationSetup mode={locationsSetup.destination.locationMode} 
                                   propertyKey={locationsSetup.destination.propertyKey} 
                                   trip={this.props.trip} />
              )} />
              <Route path={`${this.props.match.path}/checkpoints`} render={(_) => (
                <TripLocationSetup mode={locationsSetup.checkpoints.locationMode} 
                                   propertyKey={locationsSetup.checkpoints.propertyKey} 
                                   trip={this.props.trip} />
              )} />
              <Route path={`${this.props.match.path}/members`} render={(_) => (
                <TripMembersAdd members={this.props.trip.members}
                                trip={this.props.trip} />
              )} />
              <Route render={(_) => <TripForm trip={this.props.trip} />} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    instanciateTrip: bindActionCreators(instanciateTrip, dispatch)
  }
}

function mapStateToProps (state) {
  return {
    trip: state.trips.currentTrip
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTrip);
