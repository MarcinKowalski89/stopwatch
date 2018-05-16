import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { showClock, hideClock } from './actions';
import Clock from '../Clock/Clock';
import './GlobalTime.scss';

const GlobalTime = (props) => {
  const cities = Object.keys(props.clocks);

  return (
    <Fragment>
      <ul className="d-flex flex-row">
        {cities.map((city) => {
          const currentClock = props.clocks[city];

          return (
            <li key={city}>
              <button
                className="btn btn-info"
                onClick={() => props.showClock(city)}
                disabled={currentClock.show}
              >
                {currentClock.city}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="d-flex flex-wrap">
        {cities.map((city) => {
          const currentClock = props.clocks[city];

          return (
            currentClock.show
            ? <Clock
              key={city}
              hideClock={props.hideClock}
              {...currentClock}
            />
            : null
          );
        })}
      </div>
    </Fragment>
  );
};

GlobalTime.propTypes = {
  clocks: PropTypes.objectOf(Object).isRequired,
  hideClock: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    clocks: state.globalTime,
  }),
  {
    showClock,
    hideClock,
  },
)(GlobalTime);
