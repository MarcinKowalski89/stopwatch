import React from 'react';
import { shallow } from 'enzyme';

import Clock from '../Clock';

test('Clock should match default snapshot', () => {
  const constantDate = new Date('2017-06-13T04:41:20')

  Date = class extends Date {
    constructor() {
      super();
      return constantDate;
    }
  };

  const component = shallow(<Clock
    hideClock={() => null}
    city="Warsaw"
    locale="en-US"
    timeZone="Europe/Warsaw"
  />);

  expect(component).toMatchSnapshot();
});
