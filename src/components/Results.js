import React from 'react';

class Results extends React.Component {

  render() {
    return (
      <div>
        <h2>List of time results</h2>
        <ul className="list-group">
          <li className="list-group-item">Result 1</li>
          <li className="list-group-item">Result 2</li>
          <li className="list-group-item">Result 3</li>
        </ul>
      </div>
    );
  }

}

export default Results;