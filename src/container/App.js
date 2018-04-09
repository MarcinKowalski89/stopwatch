import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Stopwatch from '../components/Stopwatch';
import GlobalTime from '../components/GlobalTime';

const App = () => (
  <div className="container">
    <div className="row d-flex align-items-center" style={{ height: '100%' }}>
      <Switch>
        <Route path="/stopwatch" component={Stopwatch} />
        <Route path="/globaltime" component={GlobalTime} />
        <Redirect to="/stopwatch" />
      </Switch>
    </div>
  </div>
);

export default App;
