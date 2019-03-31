import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './toggle.scss';

export default class Toggle extends Component {
  render() {
    const { labels, text, type, onChange, value } = this.props;
    return (
      <div className={styles['toggle']}>
        <span className={styles['toggle__label']}> {text} </span>
        <div className={styles['toggle__body']}>
          <input
            id={'toggle-' + labels[0]}
            className={styles['toggle__item--left']}
            name={type + 'Toggle'}
            type="radio"
            value={labels[0].toLowerCase()}
            defaultChecked={!value}
            onChange={onChange}
          />
          <label htmlFor={'toggle-' + labels[0]} className={styles['btn']}>
            {labels[0]}
          </label>
          <input
            id={'toggle-' + labels[1]}
            className={styles['toggle__item--right']}
            name={type + 'Toggle'}
            value={labels[1].toLowerCase()}
            type="radio"
            defaultChecked={value}
            onChange={onChange}
          />
          <label htmlFor={'toggle-' + labels[1]} className={styles['btn']}>
            {labels[1]}
          </label>
        </div>
      </div>
    );
  }
}

Toggle.propTypes = {
  labels: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
};
