import React, { Fragment } from 'react';
import Clock from '../Clock/Clock';
import './GlobalTime.scss';

class GlobalTime extends React.Component {
  constructor(props) {
    super(props);

    this.addClock = this.addClock.bind(this);

    this.state = {
      clocks: [
        {
          city: 'Warsaw',
          locale: 'en-US',
          timeZone: 'Europe/Warsaw',
          show: true,
        },
        {
          city: 'New York',
          locale: 'en-US',
          timeZone: 'America/New_York',
          show: false,
        },
        {
          city: 'Tallinn',
          locale: 'en-US',
          timeZone: 'Europe/Tallinn',
          show: false,
        },
        {
          city: 'Dubai',
          locale: 'en-US',
          timeZone: 'Asia/Dubai',
          show: false,
        },
      ],
    };
  }

  addClock(i) {
    const toggle = this.state.clocks.slice();
    toggle[i].show = !toggle[i].show;
    this.setState({ clocks: toggle });
  }

  render() {
    return (
      <Fragment>
        <ul className="d-flex flex-row">
          {this.state.clocks.map((clock, i) => (
            <li key={clock.city}>
              <button
                className="btn btn-info"
                onClick={() => this.addClock(i)}
                disabled={clock.show}
              >
                {clock.city}
              </button>
            </li>
          ))}
        </ul>
        <div className="d-flex flex-wrap">
          {this.state.clocks.map((clock, i) => (
            clock.show
              ? <Clock key={clock.city} addClock={this.addClock} index={i} {...clock} />
              : null
          ))}
        </div>
      </Fragment>
    );
  }
}
export default GlobalTime;
