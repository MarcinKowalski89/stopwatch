import React from 'react';
import { render } from 'react-dom';
import Time from './components/Time';
import Controls from './components/Controls';
import Results from './components/Results';

class App extends React.Component {
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
      <div className="container">
        <div className="row d-flex align-items-center" style={{ height: '100%' }}>
          <div className="col">
            <Time time={this.state.time} />
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
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
