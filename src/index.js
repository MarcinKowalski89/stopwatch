import React from 'react';
import { render } from 'react-dom';
import Time from './components/Time';
import Controls from './components/Controls';
import Results from './components/Results';

const App = () => (
  <div className="container">
    <div className="row d-flex align-items-center" style={{ height: '100%' }}>
      <div className="col">
        <Time />
        <Controls />
      </div>
      <div className="col">
        <Results />
      </div>
    </div>
  </div>
);

render(<App/>, document.getElementById('app'));