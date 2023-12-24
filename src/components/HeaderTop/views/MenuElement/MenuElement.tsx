import { type Sections } from '@/types/sections';
import { Link, LinkTheme } from '@/ui/Link';
import { getAnchorLink } from '@/utils/getAnchorLink';
import clsx from 'clsx';
import React, { useCallback, type FC, type PropsWithChildren } from 'react';
import styles from './MenuElement.module.scss';

interface MenuElementProps {
  href: Sections;
  active?: boolean;
  clickHandler: (section: Sections) => void;
}

export const MenuElement: FC<PropsWithChildren<MenuElementProps>> = ({
  href,
  active,
  clickHandler,
  children,
}) => {
  const onClickHandler = useCallback((): void => {
    clickHandler(href);
  }, [clickHandler, href]);

  return (
    <li className={styles.menuElement}>
      <Link
        className={clsx(active && styles.active)}
        href={getAnchorLink(href)}
        center
        theme={LinkTheme.WHITE}
        onClick={onClickHandler}
      >
        {children}
      </Link>
    </li>
  );
};
