import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import outdoorAppStore  from './store/store';

import Home from './home/Home';
import SocialLogin from './auth/SocialLogin';
import HomeSignedIn from './dashboard/HomeSignedIn';
import TripsCreate from './trips/add/AddTrip';
import TripDetail from './trips/detail/TripDetail';
import TripsList from './trips/list/TripsList';
import AddFriend from './friends/add/AddFriend';
import FriendDetail from './friends/detail/FriendDetail';
import FriendsList from './friends/list/FriendsList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={outdoorAppStore}>
          <Router>
            <Redirect to="/login" />
            <Switch>
              <Route exact path="/login" component={SocialLogin} />
              <Route path="/dashboard" component={HomeSignedIn} />
              <Route exact path="/trips/create" component={TripsCreate} />
              <Route exact path="/trips/:id" component={TripDetail} />
              <Route path="/trips" component={TripsList} />
              <Route exact path="/friends/add" component={AddFriend} />
              <Route exact path="/friends/:id" component={FriendDetail} />
              <Route path="/friends" component={FriendsList} />
              <Route path="/" component={Home} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
