import {
  LangVariants,
  useLangContext,
} from '@/services/LangToggler/LangTogglerContext';
import React, { type FC } from 'react';
import styles from './Work.module.scss';
// interface WorkProps {}
export const Work: FC = () => {
  const { setLang } = useLangContext();

  return (
    <div className={styles.Work}>
      Work
      <button
        onClick={() => {
          setLang(LangVariants.CHI);
        }}
      ></button>
    </div>
  );
};
