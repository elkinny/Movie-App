import React from 'react';
import PropTypes from 'prop-types';

import { Toggle } from 'components/Common';

import styles from './form-component.scss';

const FormComponent = props => {
  return (
    <form className={styles.form} onSubmit={props.searchMovie}>
      <input type="text" name="search" placeholder="Search..." onChange={props.handleInput} />
      <input type="submit" value="Search" />
      <Toggle
        labels={['Title', 'Genre']}
        type="search"
        text="Search by:"
        onChange={props.handleInput}
        value={'title' !== props.toggled_sortValue}
      />
    </form>
  );
};

FormComponent.propTypes = {
  searchMovie: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  toggled_sortValue: PropTypes.string.isRequired,
};

export default FormComponent;
