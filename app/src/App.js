import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import outdoorAppStore  from './stores/store';

import BaseDashboard from './dashboard/views/BaseDashboard';
import BaseTrip from './trips/views/BaseTrip';
import SocialLogin from './auth/views/SocialLogin';

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
          <Provider store={outdoorAppStore}>
            <Router>
              <Switch>
                <Route path="/dashboard" component={BaseDashboard}/>
                <Route path="/trips" component={BaseTrip} />
                <Route path="/login" component={SocialLogin} />
                <Route component={BaseDashboard} />
              </Switch>
            </Router>
          </Provider>
        </div>
      </div>
    );
  }
}

export default App;
