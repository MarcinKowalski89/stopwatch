import React from 'react';
import { RingLoader } from 'react-spinners';

import './Loader.scss';

const Loader = () => (
  <div className="sweet-loading">
    <RingLoader loading />
  </div>
);

export default Loader;
