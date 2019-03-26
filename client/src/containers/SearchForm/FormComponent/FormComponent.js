import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Toggle } from 'components/Common';

import styles from './form-component.scss';

export default class FormComponent extends Component {
  state = {
    searchValue: '',
  };

  handleInput = e => {
    this.setState({ searchValue: e.target.value });
  };

  render() {
    return (
      <form
        className={styles.form}
        onSubmit={e => this.props.handleSubmit(e, this.state.searchValue)}
      >
        <input type="text" name="search" placeholder="Search..." onChange={this.handleInput} />
        <input type="submit" value="Search" />
        <Toggle
          labels={['Title', 'Genre']}
          type="search"
          text="Search by:"
          onChange={this.props.handleToggle}
          value={'title' !== this.props.sortTypeValue}
        />
      </form>
    );
  }
}

FormComponent.propTypes = {
  searchMovie: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
  sortTypeValue: PropTypes.string.isRequired,
};
