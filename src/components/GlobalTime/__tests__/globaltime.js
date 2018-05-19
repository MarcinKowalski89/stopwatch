import React from 'react';
import { shallow } from 'enzyme';

import { GlobalTime } from '../GlobalTime';

test('GlobalTime should match default snapshot', () => {
  const component = shallow(<GlobalTime
    clocks={{
      Warsaw: {
        city: 'Warsaw',
        locale: 'en-US',
        timeZone: 'Europe/Warsaw',
        show: false,
      },
      NewYork: {
        city: 'New York',
        locale: 'en-US',
        timeZone: 'America/New_York',
        show: false,
      },
      Tallinn: {
        city: 'Tallinn',
        locale: 'en-US',
        timeZone: 'Europe/Tallinn',
        show: false,
      },
      Dubai: {
        city: 'Dubai',
        locale: 'en-US',
        timeZone: 'Asia/Dubai',
        show: false,
      },
    }}
    hideClock={() => null}
  />);

  expect(component).toMatchSnapshot();
});

test('GlobalTime should match snapshot with Warsaw and Dubai clocks', () => {
  const component = shallow(<GlobalTime
    clocks={{
      Warsaw: {
        city: 'Warsaw',
        locale: 'en-US',
        timeZone: 'Europe/Warsaw',
        show: true,
      },
      NewYork: {
        city: 'New York',
        locale: 'en-US',
        timeZone: 'America/New_York',
        show: false,
      },
      Tallinn: {
        city: 'Tallinn',
        locale: 'en-US',
        timeZone: 'Europe/Tallinn',
        show: false,
      },
      Dubai: {
        city: 'Dubai',
        locale: 'en-US',
        timeZone: 'Asia/Dubai',
        show: true,
      },
    }}
    hideClock={() => null}
  />);

  expect(component).toMatchSnapshot();
});
