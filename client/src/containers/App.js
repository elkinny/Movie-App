import React, { Component } from 'react';

import { Header, Footer } from 'components/Common';
import MoviesList from 'containers/MoviesList';

import styles from './app.scss';

export default class App extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.container}>
          <main>
            {this.props.children}
            <MoviesList />
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}
