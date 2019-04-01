import ErrorBoundaryContainer from './ErrorBoundary.container';
import React from 'react';
import { shallow } from './../../test/enzymeSetup.js';

describe('test: ', () => {
  it('getDerivedStateFromError test', () => {
    expect(ErrorBoundaryContainer.getDerivedStateFromError()).toEqual({ hasError: true });
  });

  it('componentDidCatch test', () => {
    const component = shallow(
      <ErrorBoundaryContainer errorName="errorName" componentStack="componentStack" />,
    );
    const inst = component.instance();
    const spy = jest.spyOn(inst, 'setState');
    inst.componentDidCatch('error', 'info');
    expect(spy).toHaveBeenCalled();
  });

  it('Error in component test', () => {
    const component = shallow(
      <ErrorBoundaryContainer errorName="errorName" componentStack="componentStack" />,
    );
    component.setState({ hasError: true });
    expect(component).toMatchSnapshot();
  });

  it('No error in component test', () => {
    const component = shallow(
      <ErrorBoundaryContainer errorName="errorName" componentStack="componentStack">
        Hi
      </ErrorBoundaryContainer>,
    );
    component.setState({ hasError: false });
    expect(component).toMatchSnapshot();
  });
});
