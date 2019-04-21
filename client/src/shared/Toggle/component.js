import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.scss';

const Toggle = props => {
  const { labels, text, name, onChange, values, defaultValue } = props;
  return (
    <div className={styles['toggle']}>
      <span className={styles['toggle__label']}> {text} </span>
      <div className={styles['toggle__body']}>
        <input
          id={'toggle-' + labels[0]}
          className={styles['toggle__item--left']}
          name={name}
          type="radio"
          value={values[0]}
          defaultChecked={!defaultValue}
          onChange={onChange}
        />
        <label htmlFor={'toggle-' + labels[0]} className={styles['btn']}>
          {labels[0]}
        </label>
        <input
          id={'toggle-' + labels[1]}
          className={styles['toggle__item--right']}
          name={name}
          value={values[1]}
          type="radio"
          defaultChecked={defaultValue}
          onChange={onChange}
        />
        <label htmlFor={'toggle-' + labels[1]} className={styles['btn']}>
          {labels[1]}
        </label>
      </div>
    </div>
  );
};

Toggle.propTypes = {
  labels: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.bool.isRequired,
  values: PropTypes.array.isRequired,
};

export default Toggle;
