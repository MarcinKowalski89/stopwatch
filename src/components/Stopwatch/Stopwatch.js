import React, { Fragment } from 'react';
import Time from '../Time/Time';
import Controls from '../Controls/Controls';
import Results from '../Results/Results';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    ['startTime', 'stopTime', 'resetTime', 'saveTime'].forEach((method) => {
      this[method] = this[method].bind(this);
    });

    this.state = {
      time: null,
      results: [],
      isRunning: false,
    };
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  startTime() {
    this.setState({ isRunning: true });
    this.start = this.state.time ? (new Date() - this.state.time) : new Date();
    this.timer = setInterval(this.updateTime.bind(this, this.start), 10);
  }

  updateTime(start) {
    const diffTime = new Date() - start;
    const time = new Date(diffTime);
    this.setState({ time });
  }

  stopTime() {
    this.setState({ isRunning: false });
    clearInterval(this.timer);
  }

  resetTime() {
    this.setState({
      time: null,
      results: [],
    });
    this.stopTime();
  }

  saveTime() {
    if (this.state.time) {
      this.setState({ results: this.state.results.concat(this.state.time) });
    }
  }

  render() {
    return (
      <Fragment>
        <div className="col">
          <h1 className="text-center">
            <Time time={this.state.time} />
          </h1>
          <Controls
            start={this.startTime}
            stop={this.stopTime}
            reset={this.resetTime}
            save={this.saveTime}
            isRunning={this.state.isRunning}
          />
        </div>
        <div className="col">
          <Results items={this.state.results} />
        </div>
      </Fragment>
    );
  }
}
export default Stopwatch;
