import React from 'react';

class Controls extends React.Component {

  render() {
    return (
      <div className="d-flex justify-content-center btn-group">
        <button className="btn btn-success">Start</button>
        <button className="btn btn-danger">Stop</button>
        <button className="btn btn-warning">Reset</button>
        <button className="btn btn-primary">Save time to list</button>
      </div>
    );
  }

}

export default Controls;