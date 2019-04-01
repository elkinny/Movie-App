import ErrorBoundaryComponent from './ErrorBoundary.component';
import React from 'react';
import { mount } from './../../test/enzymeSetup.js';

describe('test: ', () => {
  it('ErrorBoundaryComponent to mathc snapshot', () => {
    const props = {
      errorName: 'errorName',
      componentStack: 'componentStack',
    };
    const component = mount(<ErrorBoundaryComponent {...props} />);
    expect(component).toMatchSnapshot();
  });
});
