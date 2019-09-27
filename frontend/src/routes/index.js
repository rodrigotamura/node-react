import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SignIn from '~/pages/Signin';

import Dashboard from '~/pages/Dashboard';
import Favoreds from '~/pages/Favoreds';
import FavoredEdit from '~/pages/Favoreds/Edit';
import FavoredNew from '~/pages/Favoreds/New';
import Transferings from '~/pages/Transferings';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/favoreds" exact component={Favoreds} isPrivate />
      <Route path="/favoreds/new" component={FavoredNew} isPrivate />
      <Route path="/favoreds/:id" component={FavoredEdit} isPrivate />
      <Route
        path="/transferings/:favored_id?"
        component={Transferings}
        isPrivate
      />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
