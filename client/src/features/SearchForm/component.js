import React from 'react';
import PropTypes from 'prop-types';

import { Toggle } from 'shared';

import styles from './style.scss';

const SearchFormComponent = props => {
  return (
    <form
      className={styles.form}
      onSubmit={e => props.handleSubmit(e, props.searchValue, props.searchType)}
    >
      <input type="text" name="searchValue" placeholder="Search..." onChange={props.handleInput} />
      <Toggle
        labels={['Title', 'Genre']}
        values={['title', 'genres']}
        name="searchType"
        text="Search by:"
        onChange={props.handleInput}
        defaultValue={'title' !== props.searchType}
      />
      <input type="submit" value="Search" />
    </form>
  );
};

SearchFormComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  searchType: PropTypes.string.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default SearchFormComponent;
