import React from 'react';
import PropTypes from 'prop-types';
import Time from '../Time/Time';

const Results = props => (
  <div>
    <h2>List of time results</h2>
    <ul className="list-group">
      {props.items.map((item, i) => {
        const key = i + 1;
        return (
          <li key={key} className="list-group-item">{i + 1}&nbsp;-&nbsp;
            <Time time={item} />
          </li>
        );
      })}
    </ul>
  </div>
);

Results.propTypes = { items: PropTypes.arrayOf(Date).isRequired };

export default Results;
