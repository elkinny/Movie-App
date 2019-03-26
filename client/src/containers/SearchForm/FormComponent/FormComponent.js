import React from 'react';
import PropTypes from 'prop-types';

import { Toggle } from 'components/Common';

import styles from './form-component.scss';

const FormComponent = props => {
  return (
    <form className={styles.form} onSubmit={props.onSubmit}>
      <input type="text" name="search" placeholder="Search..." onChange={props.handleInput} />
      <input type="submit" value="Search" />
      <Toggle
        labels={['Title', 'Genre']}
        type="search"
        text="Search by:"
        onChange={props.handleInput}
        value={'Title' === props.toggled_filterValue}
      />
    </form>
  );
};

FormComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  toggled_filterValue: PropTypes.string.isRequired,
};

export default FormComponent;
