import React from 'react';
import PropTypes from 'prop-types';

import timeHelper from '../../../helpers/time';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date(new Date()
        .toLocaleString(this.props.locale, { timeZone: this.props.timeZone })),
    };
  }

  componentDidMount() {
    this.clock = setInterval(() => this.tick(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  tick() {
    this.setState({
      time: new Date(new Date()
        .toLocaleString(this.props.locale, { timeZone: this.props.timeZone })),
    });
  }

  deleteWhiteSpaces() {
    return this.props.city.replace(/\s/g, '');
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
            onClick={() => this.props.hideClock(this.deleteWhiteSpaces())}
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
        <h4 className="city">{this.props.city}</h4>
      </div>
    );
  }
}

Clock.propTypes = {
  hideClock: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
  timeZone: PropTypes.string.isRequired,
};

export default Clock;
