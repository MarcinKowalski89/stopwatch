import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Stopwatch from '../components/Stopwatch/Stopwatch';
import GlobalTime from '../components/GlobalTime/GlobalTime';
import Nav from '../components/Nav/Nav';
import '../components/GlobalTime/GlobalTime.scss';

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Nav />
      <div className="container">
        <div className="row d-flex" style={{ height: '100%' }}>
          <Switch>
            <Route path="/stopwatch" component={Stopwatch} />
            <Route path="/globaltime" component={GlobalTime} />
            <Redirect to="/stopwatch" />
          </Switch>
        </div>
      </div>
    </Fragment>
  </BrowserRouter>
);

export default App;
