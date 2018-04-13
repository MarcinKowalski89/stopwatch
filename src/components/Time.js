import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import timeHelper from '../../helpers/time';

const Time = (props) => {
  if (!props.time) {
    return (
      <Fragment>
        <span>00:</span>
        <span>00:</span>
        <span>00.</span>
        <span>000</span>
      </Fragment>
    );
  }
  const {
    h, m, s, ms,
  } = timeHelper(props.time, 'resetHours');

  return (
    <Fragment>
      <span>{h < 10 ? `0${h}` : h}:</span>
      <span>{m < 10 ? `0${m}` : m}:</span>
      <span>{s < 10 ? `0${s}` : s}.</span>
      <span>{ms}</span>
    </Fragment>
  );
};

Time.defaultProps = {
  time: new Date(),
};

Time.propTypes = { time: PropTypes.instanceOf(Date) };

export default Time;
