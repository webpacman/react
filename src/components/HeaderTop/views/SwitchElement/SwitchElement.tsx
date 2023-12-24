import {
  useLangContext,
  type LangVariants,
} from '@/services/LangToggler/LangTogglerContext';
import React, { type FC } from 'react';
import styles from './SwitchElement.module.scss';

interface SwitchElementProps {
  lang: LangVariants;
}

export const SwitchElement: FC<SwitchElementProps> = ({ lang }) => {
  const { lang: langContext, setLang } = useLangContext();

  return (
    <>
      <input
        type="radio"
        name="lang"
        id={lang}
        className={styles.radio}
        checked={langContext === lang}
        onChange={() => {
          setLang(lang);
        }}
      />
      <label className={styles.switch} htmlFor={lang}>
        {`${lang.charAt(0).toUpperCase() + lang.slice(1)}`}
      </label>
    </>
  );
};
