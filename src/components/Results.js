import React from 'react';

class Results extends React.Component {

  render() {
    return ( 
      <div>
        <h2>List of time results</h2>
        <ul className="list-group">
          {this.props.items.map((item, i) => 
            <li key={i} className="list-group-item">{i + 1} - {item}</li>
          )}
        </ul>
      </div>
    );
  }

}

export default Results;