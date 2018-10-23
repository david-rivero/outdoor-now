import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import streetMap from '../../shared/icons/street-map.svg';
import routeMap from '../../shared/icons/route.svg';
import addIcon from '../../shared/icons/plus.svg';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './BaseDashboard.css';
import TripDashBoard from './trip-dashboard/TripDashboard';
import MapDashboard from './map-dashboard/MapDashboard';
import AuthProtectedView from '../../shared/components/auth-protected-view/AuthProtectedView';


export default class BaseDashboard extends React.Component {
  render () {
    return (
      <div className="dashboard-base">
        <Router>
          <div className="dashboard-parent">
            <div className="dashboard-view">
              <Switch>
                <Route path={`${this.props.match.path}/trips`} render={(routeProps) => (<TripDashBoard />)} />
                <Route path={`${this.props.match.path}/map`} component={ MapDashboard } />
                <Route render={(routeProps) => (<TripDashBoard />)} />
              </Switch>
              <div className="add-tour-icon">
                <a href="/trips/create">
                  <svg viewBox="0 0 32 32">
                    <use xlinkHref={`${addIcon}#plusSign`}></use>
                  </svg>
                </a>
              </div>
            </div>
            <div className="dashboard-links">
              <Link to="/dashboard/trips" className="dashboard-link-ft">
                <figure className="dashboard-link-trip">
                  <img src={routeMap} alt="Trips" />
                  <figcaption>Trips</figcaption>
                </figure>
              </Link>
              <Link to="/dashboard/map" className="dashboard-link-ft">
                <figure className="dashboard-link-map">
                  <img src={streetMap} alt="Map" />
                  <figcaption>Map</figcaption>
                </figure>
              </Link>
            </div>
          </div>
        </Router>
          <AuthProtectedView></AuthProtectedView>
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    tripChecked: bindActionCreators(tripChecked, dispatch)
  }
}

function mapStateToProps (state) {
  return {
    tripCheck: state.trips.tripCheck
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseDashboard);
