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

test('Controls shoud call start method after click on start button', () => {

  const startMock = jest.fn();
  const component = shallow(<Controls
    isRunning={false}
    start={startMock}
    stop={() => null}
    reset={() => null}
    save={() => null}
  />);

  const btns = component
    .find('button')
    .findWhere((btn) => btn.hasClass('btn-success'))
    .simulate('click');

  expect(startMock).toHaveBeenCalled();
});

test('Controls shoud call stop method after click on stop button', () => {

  const stopMock = jest.fn();
  const component = shallow(<Controls
    isRunning={true}
    start={() => null}
    stop={stopMock}
    reset={() => null}
    save={() => null}
  />);

  const btns = component
    .find('button')
    .findWhere((btn) => btn.hasClass('btn-danger'))
    .simulate('click');

  expect(stopMock).toHaveBeenCalled();
});

test('Controls shoud call reset method after click on reset button', () => {

  const resetMock = jest.fn();
  const component = shallow(<Controls
    isRunning={false}
    start={() => null}
    stop={() => null}
    reset={resetMock}
    save={() => null}
  />);

  const btns = component
    .find('button')
    .findWhere((btn) => btn.hasClass('btn-warning'))
    .simulate('click');

  expect(resetMock).toHaveBeenCalled();
});

test('Controls shoud call save method after click on save button', () => {

  const saveMock = jest.fn();
  const component = shallow(<Controls
    isRunning={false}
    start={() => null}
    stop={() => null}
    reset={() => null}
    save={saveMock}
  />);

  const btns = component
    .find('button')
    .findWhere((btn) => btn.hasClass('btn-primary'))
    .simulate('click');

  expect(saveMock).toHaveBeenCalledWith();
});
