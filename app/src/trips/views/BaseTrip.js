import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CreateTrip from './create-trip/CreateTrip';
import TripInfo from './trip-info/TripInfo';
import AuthProtectedView from '../../shared/components/auth-protected-view/AuthProtectedView';

export default function BaseTrip (props) {
  return (
    <div className="base-trip">
      <Router>
        <Switch>
          <Route path={`${props.match.path}/create`} component={CreateTrip} />
          <Route path={`${props.match.path}/info/:id`} component={TripInfo} />
        </Switch>
      </Router>
        <AuthProtectedView></AuthProtectedView>
      </div>
    </div>
  );
}
