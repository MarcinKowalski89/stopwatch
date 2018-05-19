import React from 'react';
import { shallow } from 'enzyme';

import { Controls } from '../Controls';

test('Controls shoud match default snapshot', () => {
  const component = shallow(<Controls
    isRunning={false}
    start={() => null}
    stop={() => null}
    reset={() => null}
    save={() => null}
  />);

  expect(component).toMatchSnapshot();
});

test('Controls shoud match snapshot for running time', () => {
  const component = shallow(<Controls
    isRunning
    start={() => null}
    stop={() => null}
    reset={() => null}
    save={() => null}
  />);

  expect(component).toMatchSnapshot();
});
