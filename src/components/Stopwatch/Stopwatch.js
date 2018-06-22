import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { startStopwatch, stopStopwatch, addResult, resetResults } from './actions';
import Time from '../Time/Time';
import Controls from '../Controls/Controls';
import Results from '../Results/Results';

export class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    ['startTime', 'stopTime', 'resetTime', 'saveTime'].forEach((method) => {
      this[method] = this[method].bind(this);
    });

    this.state = {
      time: null,
    };
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  startTime() {
    this.props.startStopwatch();
    this.start = this.state.time ? (new Date() - this.state.time) : new Date();
    this.timer = setInterval(this.updateTime.bind(this, this.start), 10);
  }

  updateTime(start) {
    const diffTime = new Date() - start;
    const time = new Date(diffTime);
    this.setState({ time });
  }

  stopTime() {
    this.props.stopStopwatch();
    clearInterval(this.timer);
  }

  resetTime() {
    this.setState({
      time: null,
    });
    this.props.resetResults();
    this.stopTime();
  }

  saveTime() {
    if (this.state.time) {
      this.props.addResult(this.state.time);
    }
  }

  render() {
    return (
      <Fragment>
        <div className="col align-self-center">
          <h1 className="text-center">
            <Time time={this.state.time} />
          </h1>
          <Controls
            start={this.startTime}
            stop={this.stopTime}
            reset={this.resetTime}
            save={this.saveTime}
            isRunning={this.props.isRunning}
          />
        </div>
        <div className="col">
          <Results />
        </div>
      </Fragment>
    );
  }
}

Stopwatch.propTypes = {
  isRunning: PropTypes.bool.isRequired,
  startStopwatch: PropTypes.func.isRequired,
  stopStopwatch: PropTypes.func.isRequired,
  resetResults: PropTypes.func.isRequired,
  addResult: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    isRunning: state.stopwatch.isRunning,
  }),
  {
    startStopwatch,
    stopStopwatch,
    addResult,
    resetResults,
  },
  // dispatch => ({
  //   startStopwatch: () => dispatch(startStopwatch()),
  //   stopStopwatch: () => dispatch(stopStopwatch()),
  //   addResult: time => dispatch(addResult(time)),
  //   resetResults: () => dispatch(resetResults()),
  // }),
)(Stopwatch);
