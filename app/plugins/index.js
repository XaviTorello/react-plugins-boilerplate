import React from 'react';
import { Switch, Route } from 'react-router';

import Tester from './Tester';

const Plugins = () => (
  <Switch>
    <Route component={Tester} />
  </Switch>
);

export default Plugins;
