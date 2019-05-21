import React from 'react';

import styles from './style.scss';

//@flow

type Props = {
  labels: ?Array<string>,
  onChange: ?(value: mixed) => mixed,
  text: ?string,
  name: ?string,
  defaultValue: ?boolean,
  values: ?Array<string>,
};

const Toggle = (props: Props) => {
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

export default Toggle;
