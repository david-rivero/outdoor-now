import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TripForm from '../../components/trip-form/TripForm';
import TripMembersAdd from '../../components/trip-members-add/TripMembersAdd';
import TripLocationSetup from '../../components/trip-location-setup/TripLocationSetup';

import './CreateTrip.css';

import logo from '../../../shared/icons/outdoor-now.svg';

export default class CreateTrip extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      trip: {
        members: []
      }
    };
  }

  render () {
    let locationsSetup = {
      origin: {
        locationMode: 'SINGLE_LOCATION',
        propertyKey: 'origin'
      },
      destination: {
        locationMode: 'SINGLE_LOCATION',
        propertyKey: 'destination'
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
              <Route path={`${this.props.match.path}/origin`} render={(routeProps) => (
                <TripLocationSetup mode={locationsSetup.origin.locationMode} propertyKey={locationsSetup.origin.propertyKey} trip={this.state.trip} />
              )} />
              <Route path={`${this.props.match.path}/destination`} render={(routeProps) => (
                <TripLocationSetup mode={locationsSetup.destination.locationMode} propertyKey={locationsSetup.destination.propertyKey} trip={this.state.trip} />
              )} />
              <Route path={`${this.props.match.path}/checkpoints`} render={(routeProps) => (
                <TripLocationSetup mode={locationsSetup.checkpoints.locationMode} propertyKey={locationsSetup.checkpoints.propertyKey} trip={this.state.trip} />
              )} />
              <Route path={`${this.props.match.path}/members`} render={(routeProps) => (
                <TripMembersAdd members={this.state.trip.members} />
              )} />
              <Route component={TripForm} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}
