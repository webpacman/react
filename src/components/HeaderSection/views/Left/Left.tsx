import React, { type FC } from 'react';
import styles from './Left.module.scss';

interface LeftProps {}

export const Left: FC<LeftProps> = () => {
  return (
    <div className={styles.Left}>
      <img src="" alt="" />
    </div>
  );
};
