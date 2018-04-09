import React from 'react';
import PropTypes from 'prop-types';

const Clock = (props) => {
  const h = props.time.getHours();
  const m = props.time.getMinutes();
  const s = props.time.getSeconds();
  const hdeg = (h * 30) + (m / 2);
  const mdeg = (m * 6) + (s / 10);
  const sdeg = s * 6;

  const hoursDeg = {
    transform: `rotate(${hdeg}deg)`,
  };

  const minutesDeg = {
    transform: `rotate(${mdeg}deg)`,
  };

  const secondsDeg = {
    transform: `rotate(${sdeg}deg)`,
  };

  return (
    <div className="clock-wrapper">
      <div className="clock">
        <div
          className="hours"
          style={hoursDeg}
        />
        <div
          className="minutes"
          style={minutesDeg}
        />
        <div
          className="seconds"
          style={secondsDeg}
        />
      </div>
      <h4 className="city">{props.city}</h4>
    </div>
  );
};

Clock.propTypes = {
  time: PropTypes.instanceOf(Date).isRequired,
  city: PropTypes.string.isRequired,
};

export default Clock;
