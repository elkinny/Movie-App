import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Toggle } from 'components/Common';

import styles from './form-component.scss';

export default class FormComponent extends Component {
  state = {
    searchValue: '',
    searchToggleValue: this.props.searchToggleValue,
  };

  handleInput = e => {
    this.setState({ [`${e.target.name}Value`]: e.target.value });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={e => this.props.handleSubmit(e, this.state)}>
        <input type="text" name="search" placeholder="Search..." onChange={this.handleInput} />
        <Toggle
          labels={['Title', 'Genre']}
          type="search"
          text="Search by:"
          onChange={this.handleInput}
          value={'title' !== this.props.searchToggleValue}
        />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

FormComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
  searchToggleValue: PropTypes.string.isRequired,
};
