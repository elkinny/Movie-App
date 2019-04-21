import React from 'react';
import PropTypes from 'prop-types';

import { Toggle, LinkButton } from 'shared';

import styles from './style.scss';

const SearchFormComponent = props => {
  return (
    <form className={styles.form}>
      <input
        type="text"
        minLength="3"
        name="searchValue"
        placeholder="Search..."
        onChange={props.handleInput}
        value={props.searchValue || ''}
      />
      <Toggle
        labels={['Title', 'Genre']}
        values={['title', 'genres']}
        name="searchType"
        text="Search by:"
        onChange={props.handleInput}
        defaultValue={'title' !== props.searchType}
      />
      <LinkButton to={`/search/value=${props.searchValue}&type=${props.searchType}`}>
        Search
      </LinkButton>
    </form>
  );
};

SearchFormComponent.propTypes = {
  handleInput: PropTypes.func.isRequired,
  searchType: PropTypes.string.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default SearchFormComponent;
