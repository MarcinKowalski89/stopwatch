import React from 'react';

class Controls extends React.Component {

  render() {
    const isRunning = this.props.isRunning;
    return (
      <div className="d-flex justify-content-center btn-group">
      {
        this.props.isRunning 
        ? <button className="btn btn-danger" onClick={ this.props.stop }>Stop</button> 
        : <button className="btn btn-success" onClick={ this.props.start } disabled={isRunning}>Start</button>
      }
        <button className="btn btn-warning" onClick={ this.props.reset }>Reset</button>
        <button className="btn btn-primary" onClick={ this.props.save } disabled={!isRunning}>Save time to list</button>
      </div>
    );
  }
}

export default Controls;