import ErrorBoundaryComponent from './ErrorBoundary.component';
import React from 'react';
import { mount } from 'enzyme';

describe('ErrorBoundaryComponent: ', () => {
  it('1. To match snapshot', () => {
    const props = {
      errorName: 'errorName',
      componentStack: 'componentStack',
    };
    const component = mount(<ErrorBoundaryComponent {...props} />);
    expect(component).toMatchSnapshot();
  });
});
