import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './toggle.scss';

export default class Toggle extends Component {
  state = {
    chkbox: true,
  };

  onChange = e => {
    this.setState({ chkbox: !this.state.chkbox });
    this.props.onChange(e);
  };

  render() {
    const { labels, text, type } = this.props;
    return (
      <div className={styles['toggle']}>
        <span className={styles['toggle__label']}> {text} </span>
        <input
          id={'toggle-' + labels[0]}
          className={styles['toggle__item--left']}
          name={'toggled_' + type}
          type="radio"
          value={labels[0].toLowerCase()}
          defaultChecked={!this.state.chkbox}
          onChange={this.onChange}
        />
        <label htmlFor={'toggle-' + labels[0]} className={styles['btn']}>
          {labels[0]}
        </label>
        <input
          id={'toggle-' + labels[1]}
          className={styles['toggle__item--right']}
          name={'toggled_' + type}
          value={labels[1].toLowerCase()}
          type="radio"
          defaultChecked={this.state.chkbox}
          onChange={this.onChange}
        />
        <label htmlFor={'toggle-' + labels[1]} className={styles['btn']}>
          {labels[1]}
        </label>
      </div>
    );
  }
}

Toggle.propTypes = {
  labels: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
