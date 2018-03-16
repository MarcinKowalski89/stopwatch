import React from 'react';
import PropTypes from 'prop-types';

const Results = props => (
  <div>
    <h2>List of time results</h2>
    <ul className="list-group">
      {props.items.map((item, i) => {
        const key = i + 1;
        return (
          <li key={key} className="list-group-item">{i + 1}&nbsp;-&nbsp;
            <span>{item.getHours() < 10 ? `0${item.getHours()}` : item.getHours()}:</span>
            <span>{item.getMinutes() < 10 ? `0${item.getMinutes()}` : item.getMinutes()}:</span>
            <span>{item.getSeconds() < 10 ? `0${item.getSeconds()}` : item.getSeconds()}.</span>
            <span>{item.getMilliseconds()}</span>
          </li>
        );
      })}
    </ul>
  </div>
);

Results.propTypes = { items: PropTypes.array.isRequired };

export default Results;
