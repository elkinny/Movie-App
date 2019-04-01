import ErrorBoundaryContainer from './ErrorBoundary.container';
import React from 'react';
import { shallow } from 'enzyme';

describe('ErrorBoundaryContainer: ', () => {
  it('1. getDerivedStateFromError() to return { hasError: true }', () => {
    expect(ErrorBoundaryContainer.getDerivedStateFromError()).toEqual({ hasError: true });
  });

  it('2. componentDidCatch() to call setState()', () => {
    const component = shallow(
      <ErrorBoundaryContainer errorName="errorName" componentStack="componentStack" />,
    );
    const inst = component.instance();
    const spy = jest.spyOn(inst, 'setState');
    inst.componentDidCatch('error', 'info');
    expect(spy).toHaveBeenCalled();
  });

  it('3. Render error message in component', () => {
    const component = shallow(
      <ErrorBoundaryContainer errorName="errorName" componentStack="componentStack" />,
    );
    component.setState({ hasError: true });
    expect(component).toMatchSnapshot();
  });

  it('4. Render children if no error', () => {
    const component = shallow(
      <ErrorBoundaryContainer errorName="errorName" componentStack="componentStack">
        Hi
      </ErrorBoundaryContainer>,
    );
    component.setState({ hasError: false });
    expect(component).toMatchSnapshot();
  });
});
