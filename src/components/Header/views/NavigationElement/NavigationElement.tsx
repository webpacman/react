import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

import { Flex } from "@/common/Flex";
import { Link, LinkTheme } from "@/common/Link";
import { Section } from "@/constants";
import { getAnchorLink } from "@/utils/getAnchorLink";

import styles from "./NavigationElement.module.scss";

interface NavigationElementProps {
  section: Section;
}

export const NavigationElement: FC<
  PropsWithChildren<NavigationElementProps>
> = ({ children, section }) => {
  return (
    <Flex tag="li" center className={styles.element}>
      <Link
        theme={LinkTheme.WHITE}
        className={clsx(
          styles.link,
          // TODO: active
          section === Section.HOME && styles.active
        )}
        href={getAnchorLink(section)}
      >
        {children}
      </Link>
    </Flex>
  );
};
