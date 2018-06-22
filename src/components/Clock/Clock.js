import React from 'react';
import PropTypes from 'prop-types';

import timeHelper from '../../../helpers/time';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date(new Date()
        .toLocaleString('en-US', { timeZone: this.props.zoneName })),
    };
  }

  componentDidMount() {
    this.clock = setInterval(() => this.tick(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  getCityName() {
    return this.props.zoneName.split('/').splice(-1);
  }

  displayProperCityName() {
    return this.getCityName().toString().replace(/_|-/g, ' ');
  }

  tick() {
    this.setState({
      time: new Date(new Date()
        .toLocaleString('en-US', { timeZone: this.props.zoneName })),
    });
  }

  render() {
    const { h, m, s } = timeHelper(this.state.time);
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
          <button
            className="btn btn-danger"
            onClick={() => this.props.hideClock(this.getCityName())}
          >
            X
          </button>
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
        <h4 className="city">{this.displayProperCityName()}</h4>
      </div>
    );
  }
}

Clock.propTypes = {
  hideClock: PropTypes.func.isRequired,
  zoneName: PropTypes.string.isRequired,
};

export default Clock;
