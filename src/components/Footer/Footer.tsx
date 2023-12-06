import { useLangContext } from '@/services/LangToggler/LangTogglerContext';
import React, { type FC } from 'react';
import styles from './Footer.module.scss';
// interface FooterProps {}
export const Footer: FC = () => {
  const { lang } = useLangContext();

  console.debug(lang);

  return <div className={styles.Footer}>Footer</div>;
};
