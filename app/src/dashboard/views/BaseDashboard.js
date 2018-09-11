import React from 'react';

import streetMap from '../../shared/icons/street-map.svg';
import routeMap from '../../shared/icons/route.svg';
import addIcon from '../../shared/icons/plus.svg';

import trips from '../../shared/mocks/trips.json';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './BaseDashboard.css';
import TripDashBoard from './trip-dashboard/TripDashboard';
import MapDashboard from './map-dashboard/MapDashboard';

export default function BaseDashboard (props) {
  return (
    <div className="dashboard-base">
      <Router>
        <div className="dashboard-parent">
          <div className="dashboard-view">
            <Switch>
              <Route path={`${props.match.path}/trips`} render={(routeProps) => (<TripDashBoard trips={trips}/>)} />
              <Route path={`${props.match.path}/map`} component={ MapDashboard } />
              <Route render={(routeProps) => (<TripDashBoard trips={trips}/>)} />
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
    </div>
  );
}
