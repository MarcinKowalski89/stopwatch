import React from 'react';
import PropTypes from 'prop-types';

const Time = (props) => {
  if (!props.time) {
    return (
      <h1 className="text-center">
        <span>00:</span>
        <span>00:</span>
        <span>00.</span>
        <span>000</span>
      </h1>
    );
  }
  const start = props.time;
  start.setHours(0);
  const h = start.getHours();
  const m = start.getMinutes();
  const s = start.getSeconds();
  const ms = start.getMilliseconds();

  return (
    <h1 className="text-center">
      <span>{h < 10 ? `0${h}` : h}:</span>
      <span>{m < 10 ? `0${m}` : m}:</span>
      <span>{s < 10 ? `0${s}` : s}.</span>
      <span>{ms}</span>
    </h1>
  );
};

Time.propTypes = { time: PropTypes.date };

export default Time;
