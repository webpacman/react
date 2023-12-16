import { useLangContext } from '@/services/LangToggler/LangTogglerContext';
import React, { type FC } from 'react';
import styles from './About.module.scss';
import { translator } from './translator';

// interface AboutProps {}

export const About: FC = () => {
  const { lang } = useLangContext();

  return <div className={styles.About}>{translator.title[lang]}</div>;
};
