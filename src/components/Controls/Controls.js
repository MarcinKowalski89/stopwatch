import React from 'react';
import PropTypes from 'prop-types';

export const Controls = (props) => {
  const {
    isRunning, start, stop, reset, save,
  } = props;
  return (
    <div className="d-flex justify-content-center btn-group">
      {
        isRunning
        ? <button className="btn btn-danger" onClick={stop}>Stop</button>
        : <button className="btn btn-success" onClick={start} disabled={isRunning}>Start</button>
      }
      <button className="btn btn-warning" onClick={reset}>Reset</button>
      <button className="btn btn-primary" onClick={save} disabled={!isRunning}>Save time to list</button>
    </div>
  );
};

Controls.propTypes = {
  isRunning: PropTypes.bool.isRequired,
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
};

export default Controls;
