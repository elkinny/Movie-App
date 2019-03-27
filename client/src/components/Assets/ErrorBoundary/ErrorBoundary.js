import React, { Component } from 'react';
import FallbackComponent from './FallbackComponent/FallbackComponent';

export default class ErrorBoundary extends Component {
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
    const { errorName, componentStack } = this.state;
    if (this.state.hasError) {
      return <FallbackComponent errorName={errorName} componentStack={componentStack} />;
    }

    return this.props.children;
  }
}
