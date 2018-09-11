import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BaseDashboard from './dashboard/views/BaseDashboard';
import BaseTrip from './trips/views/BaseTrip';

import logo from './shared/icons/outdoor-now.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="app-header">
          <img src={logo} alt="Logo" />
        </header>
        <div className="app-body">
            <Router>
              <Switch>
                <Route path="/dashboard" component={BaseDashboard}/>
                <Route path="/trips" component={BaseTrip} />
                <Route path="/login" component={SocialLogin} />
                <Route component={BaseDashboard} />
              </Switch>
            </Router>
        </div>
      </div>
    );
  }
}

export default App;
