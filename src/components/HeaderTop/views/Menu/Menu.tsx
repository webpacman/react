import { Sections } from '@/types/sections';
import React, { useCallback, useState, type FC } from 'react';
import { MenuElement } from '../MenuElement/MenuElement';
import styles from './Menu.module.scss';
import { useMenuData } from './useMenuData';

export const Menu: FC = () => {
  const [activeSection, setActiveSection] = useState<Sections>(Sections.HOME);

  const data = useMenuData();

  const clickHandler = useCallback((section: Sections): void => {
    setActiveSection(section);
  }, []);

  return (
    <nav className={styles.navigation}>
      <ul className={styles.menu}>
        {data.map((menu) => (
          <MenuElement
            key={menu.section}
            href={menu.section}
            clickHandler={clickHandler}
            active={activeSection === menu.section}
          >
            {menu.content}
          </MenuElement>
        ))}
      </ul>
    </nav>
  );
};
