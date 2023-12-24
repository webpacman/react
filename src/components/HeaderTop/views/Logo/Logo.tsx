import { useLang } from '@/services/LangToggler/hooks/useLang';
import { Sections } from '@/types/sections';
import { Link, LinkTheme } from '@/ui/Link';
import { getAnchorLink } from '@/utils/getAnchorLink';
import React, { type FC } from 'react';
import styles from './Logo.module.scss';
import { translator } from './translator';

export const Logo: FC = () => {
  const lang = useLang();

  return (
    <Link
      href={getAnchorLink(Sections.HOME)}
      className={styles.logo}
      center
      theme={LinkTheme.WHITE}
    >
      {translator.title[lang]}
    </Link>
  );
};
