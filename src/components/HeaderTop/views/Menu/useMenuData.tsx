import React, { type ReactNode } from 'react';

import { useLang } from '@/services/LangToggler/hooks/useLang';
import { Sections } from '@/types/sections';
import styles from './Menu.module.scss';
import HomeIcon from './home.svg';
import { translator } from './translator';

interface MenuElement {
  section: Sections;
  content?: ReactNode;
}

const data: MenuElement[] = [
  {
    section: Sections.HOME,
    content: <HomeIcon width={10} height={10} className={styles.home} />,
  },
  {
    section: Sections.ABOUT_ME,
  },
  {
    section: Sections.ACHIEVEMENTS,
  },
  {
    section: Sections.SKILLS,
  },
  {
    section: Sections.WORK,
  },
  {
    section: Sections.INTERESTS,
  },
  {
    section: Sections.BOOKS,
  },
  {
    section: Sections.CONTACT_ME,
  },
];

export const useMenuData = (): Required<MenuElement[]> => {
  const lang = useLang();

  return data.map((menu) => {
    if (menu.section !== Sections.HOME) {
      menu.content = translator[menu.section][lang];
    }

    return menu;
  });
};
