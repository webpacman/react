import React, { type FC } from 'react';
import styles from './Left.module.scss';

import Image from './vshevchuk.png';

import { useLangContext } from '@/services/LangToggler/LangTogglerContext';
import { translator } from '../../translator';

interface LeftProps {}

export const Left: FC<LeftProps> = () => {
  const { lang } = useLangContext();

  return (
    <div className={styles.Left}>
      <img src={Image} alt={translator.name[lang]} />
    </div>
  );
};
