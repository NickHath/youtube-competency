import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Viewer from './components/Viewer';

export default (
  // COMPS 42F, 42G, 42H
  <Switch>
    <Route exact path='/' component={ Viewer }/>
  </Switch>
)