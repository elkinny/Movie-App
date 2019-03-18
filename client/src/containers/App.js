import React, { Component } from 'react';
import MoviesList from 'components/MoviesList';

import styles from './app.scss';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 className={styles['app__title']}>Movie app</h1>
        <MoviesList />
      </div>
    );
  }
}
