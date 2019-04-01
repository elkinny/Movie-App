import AppComponent from './App.component';
import React from 'react';
import { mount } from './../../test/enzymeSetup.js';

describe('AppComponent: ', () => {
  it('1. To match snapshot', () => {
    const props = {
      sortToggleValue: 'sortToggleValue',
      handleToggle: () => {},
    };
    const component = mount(<AppComponent {...props} />);
    expect(component).toMatchSnapshot();
  });
});
