import React, { Component } from 'react';

import logo from './shared/icons/outdoor-now.svg';

import './App.css';
import BaseDashboard from './dashboard/views/BaseDashboard';
import CreateTrip from './trips/views/CreateTrip/CreateTrip';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="app-header">
          <img src={logo} alt="Logo" />
        </header>
        <Router>
          <Switch>
            <Route path="/dashboard" component={BaseDashboard}/>
            <Route path="/trips/create" component={CreateTrip} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
