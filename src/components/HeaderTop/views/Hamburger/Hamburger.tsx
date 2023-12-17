import clsx from 'clsx';
import React, { type FC } from 'react';
import styles from './Hamburger.module.scss';

export const Hamburger: FC = () => {
  return (
    <>
      <input
        className={styles.checkbox}
        type="checkbox"
        name="hamburger"
        id="hamburger"
      />
      <label htmlFor="hamburger" className={styles.menuHamburger}>
        {new Array(3).fill(undefined).map((_, idx) => (
          <span
            key={idx}
            className={clsx(styles.line, styles[`line${idx + 1}`])}
          />
        ))}
      </label>
    </>
  );
};
