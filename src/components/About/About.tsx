import {
  LangVariants,
  useLangContext,
} from '@/services/LangToggler/LangTogglerContext';
import React, { type FC } from 'react';
import styles from './About.module.scss';
// interface AboutProps {}
export const About: FC = () => {
  const { setLang } = useLangContext();

  return (
    <div className={styles.About}>
      About
      <button
        onClick={() => {
          setLang(LangVariants.RU);
        }}
      ></button>
    </div>
  );
};
