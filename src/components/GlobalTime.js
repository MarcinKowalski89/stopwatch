import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Clock from './Clock';
import '../styles/GlobalTime.scss';

class GlobalTime extends React.Component {
  componentWillMount() {
    this.setState({
      timeWarsaw: new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Warsaw' })),
      timeNewYork: new Date(new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })),
      timeTallinn: new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Tallinn' })),
      timeDubai: new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Dubai' })),
    });
  }
  componentDidMount() {
    this.clock = setInterval(() => this.run(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  run() {
    this.setState({
      timeWarsaw: new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Warsaw' })),
      timeNewYork: new Date(new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })),
      timeTallinn: new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Tallinn' })),
      timeDubai: new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Dubai' })),
    });
  }

  render() {
    return (
      <Fragment>
        <Clock
          time={this.state.timeWarsaw}
          city="Warsaw"
        />
        <Clock
          time={this.state.timeNewYork}
          city="New York"
        />
        <Clock
          time={this.state.timeTallinn}
          city="Tallinn"
        />
        <Clock
          time={this.state.timeDubai}
          city="Dubai"
        />
        <Link className="btn btn-info link" to="/stopwatch">Stopwatch</Link>
      </Fragment>
    );
  }
}
export default GlobalTime;
