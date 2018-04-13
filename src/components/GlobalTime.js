import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Clock from './Clock';
import '../styles/GlobalTime.scss';

class GlobalTime extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clocks: [
        {
          city: 'Warsaw',
          locale: 'en-US',
          timeZone: 'Europe/Warsaw',
        },
        {
          city: 'New York',
          locale: 'en-US',
          timeZone: 'America/New_York',
        },
        {
          city: 'Tallinn',
          locale: 'en-US',
          timeZone: 'Europe/Tallinn',
        },
        {
          city: 'Dubai',
          locale: 'en-US',
          timeZone: 'Asia/Dubai',
        },
      ],
    };
  }

  render() {
    return (
      <Fragment>
        {this.state.clocks.map(clock => <Clock key={clock.city} {...clock} />)}
        <Link className="btn btn-info link" to="/stopwatch">Stopwatch</Link>
      </Fragment>
    );
  }
}
export default GlobalTime;
