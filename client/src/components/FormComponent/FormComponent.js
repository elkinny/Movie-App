import React from 'react';
import PropTypes from 'prop-types';

import styles from './form-component.scss';

const FormComponent = props => {
  return (
    <form className={styles.form} onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
};

FormComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormComponent;
