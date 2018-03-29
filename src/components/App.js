import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Stopwatch from './Stopwatch';
import GlobalTime from './GlobalTime';

const App = () => (
  <div className="container">
    <div className="row d-flex align-items-center" style={{ height: '100%' }}>
      <Switch>
        <Route exact path="/" component={Stopwatch} />
        <Route path="/globaltime" component={GlobalTime} />
      </Switch>
      <Link className="btn btn-info" to="/globaltime">Global Time</Link>
    </div>
  </div>
);

export default App;
