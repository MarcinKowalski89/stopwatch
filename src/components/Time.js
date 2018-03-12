import React from 'react';

class Time extends React.Component {

  render() {
    const start = this.props.currentTime;
    if (start !== null) {
      start.setHours(0);
    }
    const h = start ? start.getHours() : 0;    
    const m = start ? start.getMinutes() : 0;
    const s = start ? start.getSeconds() : 0;
    const ms = start ? start.getMilliseconds() : 0;
    
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
