import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CreateTrip from './create-trip/CreateTrip';
import TripInfo from './trip-info/TripInfo';
import AuthProtectedView from '../../shared/components/auth-protected-view/AuthProtectedView';

export default function BaseTrip (props) {
  return (
    <div className="base-trip">
      <div>
        <Switch>
          <Route path={`${props.match.path}/create`} component={CreateTrip} />
          <Route path={`${props.match.path}/info/:id`} component={TripInfo} />
        </Switch>
        <AuthProtectedView></AuthProtectedView>
      </div>
    </div>
  );
}
