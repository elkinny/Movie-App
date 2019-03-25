import React, { Component } from 'react';

import { Header } from 'components/Common';

import styles from './app.scss';

export default class App extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.container}>
          <main>{this.props.children}</main>
        </div>
      </div>
    );
  }
}
