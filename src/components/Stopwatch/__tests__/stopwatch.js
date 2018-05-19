import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Stopwatch from '../Stopwatch';

const middlewares = [];
const mockStore = configureStore(middlewares);
const initialState = {
  stopwatch: {
    isRunning: false,
    results: [],
  },
  globalTime: {
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
  },
};

const store = mockStore(initialState);

test('Stopwatch shoud match default snapshot', () => {
  const component = shallow(
    <Provider store={store}>
      <Stopwatch
        isRunning={false}
        startStopwatch={() => null}
        stopStopwatch={() => null}
        resetResults={() => null}
        addResult={() => null}
      />
    </Provider>
  );
  expect(component).toMatchSnapshot();
});

test('Stopwatch shoud match snapshot for running stopwach', () => {
  const component = mount(
    <Provider store={store}>
      <Stopwatch
        isRunning={false}
        startStopwatch={() => null}
        stopStopwatch={() => null}
        resetResults={() => null}
        addResult={() => null}
      />
    </Provider>
  );
  component.find('.btn-success').simulate('click');
  expect(component).toMatchSnapshot();
});
