import AppContainer from './App.container';
import React from 'react';
import { shallow } from './../../test/enzymeSetup.js';

describe('test: ', () => {
  it('componentDidCatch test', () => {
    const component = shallow(
      <AppContainer errorName="errorName" componentStack="componentStack" />,
    );
    const inst = component.instance();
    const spy = jest.spyOn(inst, 'setState');
    inst.handleInput({ target: { name: 'name', value: 'value' } });
    expect(spy).toHaveBeenCalled();
  });
});
