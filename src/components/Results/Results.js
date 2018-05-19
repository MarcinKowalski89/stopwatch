import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Time from '../Time/Time';

export const Results = props => (
  <div>
    <h2>List of time results</h2>
    <ul className="list-group">
      {props.results.map((result, i) => {
        const key = i + 1;
        return (
          <li key={key} className="list-group-item">{i + 1}&nbsp;-&nbsp;
            <Time time={result} />
          </li>
        );
      })}
    </ul>
  </div>
);

Results.propTypes = { results: PropTypes.arrayOf(Date).isRequired };

export default connect(state => ({ results: state.stopwatch.results }))(Results);
