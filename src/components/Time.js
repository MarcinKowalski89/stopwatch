import React from 'react';

class Time extends React.Component {

  render() {
    const h = this.props.hours;
    const m = this.props.minutes;
    const s = this.props.seconds;
    const ms = this.props.milliseconds
    return (
      <h1 className="text-center">
        <span>{h ? (h < 10 ? ('0' + h) : h) : '00'}:</span>
        <span>{m ?(m < 10 ? ('0' + m) : m) : '00'}:</span>
        <span>{s ? (s < 10 ? ('0' + s) : s) : '00'}.</span>
        <span>{ms ? ms : '000'}</span>
      </h1>
    );
  }

}

export default Time;
