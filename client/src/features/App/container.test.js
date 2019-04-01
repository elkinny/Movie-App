import AppContainer from './container';
import React from 'react';
import { shallow } from 'enzyme';

describe('AppContainer: ', () => {
  it('1. componentDidCatch() to call setState()', () => {
    const component = shallow(
      <AppContainer errorName="errorName" componentStack="componentStack" />,
    );
    const inst = component.instance();
    const spy = jest.spyOn(inst, 'setState');
    inst.handleInput({ target: { name: 'name', value: 'value' } });
    expect(spy).toHaveBeenCalled();
  });
});
