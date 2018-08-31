import React from 'react';

import streetMap from '../../shared/icons/street-map.svg';
import routeMap from '../../shared/icons/route.svg';
import addIcon from '../../shared/icons/plus.svg';

import trips from '../mocks/trips.json';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './BaseDashboard.css';
import TripDashBoard from './TripDashboard';
import MapView from '../components/map-view/MapView';

export default function BaseDashboard () {
  const mapsSrc = "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places";

  return (
    <div className="dashboard-base">
      <Router>
        <div className="dashboard-parent">
          <div className="dashboard-view">
            <Switch>
              <Route path="/dashboard/trips" render={(routeProps) => (<TripDashBoard trips={trips}/>)} />
              <Route path="/dashboard/map" render={(routeProps) => (
                <MapView googleMapURL={mapsSrc} 
                        loadingElement={<div style={{ height: `calc(100vh - 100px)` }} />}
                        containerElement={<div style={{ height: `100%` }} />}
                        mapElement={<div style={{ height: `100%` }} />}/>
              )} />
            </Switch>
            <div className="add-tour-icon">
              <Link to="/trips/create">
                <svg viewBox="0 0 32 32">
                  <use xlinkHref={`${addIcon}#plusSign`}></use>
                </svg>
              </Link>
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
