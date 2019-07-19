import React from 'react';

import { Toggle } from 'shared';

import styles from './style.scss';

//@flow

type Props = {
  handleSubmit: (value: mixed) => mixed,
  handleInput: (value: mixed) => mixed,
  searchType: ?string,
  searchValue: ?string,
};

const SearchFormComponent = (props: Props) => {
  return (
    <form className={styles.form} onSubmit={props.handleSubmit}>
      <input
        type="text"
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
      <input type="submit" value="Search" />
    </form>
  );
};

export default SearchFormComponent;
