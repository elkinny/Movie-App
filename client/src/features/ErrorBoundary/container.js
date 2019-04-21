import React, { Component } from 'react';
import ErrorBoundaryComponent from './component';

class ErrorBoundary extends Component {
  state = { hasError: false };

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      errorName: error.toString(),
      componentStack: info.componentStack,
    });
  }

  render() {
    const { errorName, componentStack, hasError } = this.state;
    return hasError ? (
      <ErrorBoundaryComponent errorName={errorName} componentStack={componentStack} />
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
