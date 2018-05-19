import React from 'react';
import { shallow } from 'enzyme';

import { Stopwatch } from '../Stopwatch';

test('Stopwatch shoud match default snapshot', () => {
  const component = shallow(<Stopwatch
    isRunning={false}
    startStopwatch={() => null}
    stopStopwatch={() => null}
    resetResults={() => null}
    addResult={() => null}
  />);

  expect(component).toMatchSnapshot();
});

test('Stopwatch shoud match snapshot for running stopwach', () => {
  const component = shallow(<Stopwatch
    isRunning
    startStopwatch={() => null}
    stopStopwatch={() => null}
    resetResults={() => null}
    addResult={() => null}
  />);

  expect(component).toMatchSnapshot();
});
