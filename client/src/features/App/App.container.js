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
    return (
      <AppComponent sortToggleValue={this.state.sortToggleValue} handleToggle={this.handleInput} />
    );
  }
}
