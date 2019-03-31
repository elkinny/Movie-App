import React, { Component } from 'react';

import AppComponent from './App.component';

export default class App extends Component {
  state = {
    sortToggleValue: 'rating',
  };

  handleInput = e => {
    this.setState({ [`${e.target.name}Value`]: e.target.value });
  };

  render() {
    const { sortToggleValue } = this.state;
    return <AppComponent sortToggleValue={sortToggleValue} handleToggle={this.handleInput} />;
  }
}
