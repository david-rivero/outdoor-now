import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import outdoorAppStore  from './stores/store';

import BaseDashboard from './dashboard/views/BaseDashboard';
import BaseTrip from './trips/views/BaseTrip';
import SocialLogin from './auth/views/SocialLogin';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={outdoorAppStore}>
          <Router>
            <Switch>
              <Route exact path="/login" component={SocialLogin} />
              <Route path="/trips" component={BaseTrip} />
              <Route path="/dashboard" component={BaseDashboard} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
