import React from 'react';
import { shallow } from 'enzyme';

import { Results } from '../Results';

test('Results shoud match default snapshot', () => {
  const component = shallow(<Results
    results={[]}
  />);

  expect(component).toMatchSnapshot();
});

test('Results shoud match snapshot for 3 results', () => {
  const component = shallow(<Results
    results={[new Date('2017-06-13T04:41:20'), new Date('2017-06-13T04:42:20'), new Date('2017-06-13T04:43:20')]}
  />);

  expect(component).toMatchSnapshot();
});
