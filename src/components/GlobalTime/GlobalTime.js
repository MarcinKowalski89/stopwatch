import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { showClock } from './actions';
import Clock from '../Clock/Clock';
import './GlobalTime.scss';

const GlobalTime = props => (
  <Fragment>
    <ul className="d-flex flex-row">
      {Object.keys(props.clocks).map(clock => (
        <li key={clock}>
          <button
            className="btn btn-info"
            onClick={() => props.showClock(clock)}
            disabled={props.clocks[clock].show}
          >
            {props.clocks[clock].city}
          </button>
        </li>
      ))}
    </ul>
    <div className="d-flex flex-wrap">
      {Object.keys(props.clocks).map(clock => (
        props.clocks[clock].show
          ? <Clock
            key={clock}
            city={clock}
          />
          : null
      ))}
    </div>
  </Fragment>
);

GlobalTime.propTypes = { clocks: PropTypes.objectOf(Object).isRequired };

export default connect(
  state => ({
    clocks: state.globalTime,
  }),
  {
    showClock,
  },
)(GlobalTime);
