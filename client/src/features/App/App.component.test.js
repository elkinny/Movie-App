import AppComponent from './App.component';
import React from 'react';
import { mount } from './../../test/enzymeSetup.js';

describe('test: ', () => {
  it('AppComponent to match no films snapshot', () => {
    const props = {
      sortToggleValue: 'sortToggleValue',
      handleToggle: () => {},
    };
    const component = mount(<AppComponent {...props} />);
    expect(component).toMatchSnapshot();
  });
});
