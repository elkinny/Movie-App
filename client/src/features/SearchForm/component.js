import React from 'react';
import PropTypes from 'prop-types';

import { Toggle } from 'shared';

import styles from './style.scss';

const SearchFormComponent = props => {
  return (
    <form
      className={styles.form}
      onSubmit={e => props.handleSubmit(e, props.searchValue, props.searchToggleValue)}
    >
      <input type="text" name="search" placeholder="Search..." onChange={props.handleInput} />
      <Toggle
        labels={['Title', 'Genre']}
        type="search"
        text="Search by:"
        onChange={props.handleInput}
        value={'title' !== props.searchToggleValue}
      />
      <input type="submit" value="Search" />
    </form>
  );
};

SearchFormComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  searchToggleValue: PropTypes.string.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default SearchFormComponent;
