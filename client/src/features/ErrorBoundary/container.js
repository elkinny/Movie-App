import React, { Component } from 'react';
import ErrorBoundaryComponent from './component';

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    this.setState({
      errorName: error.toString(),
      componentStack: info.componentStack,
    });
  }

  render() {
    const { errorName, componentStack, hasError } = this.state;
    if (hasError) {
      return <ErrorBoundaryComponent errorName={errorName} componentStack={componentStack} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
