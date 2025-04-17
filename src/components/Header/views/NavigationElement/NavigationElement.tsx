import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

import { Flex } from "@/common/Flex";
import { Link, LinkTheme } from "@/common/Link";
import { SectionType } from "@/constants";
import { useSectionContext } from "@/services/SectionContext";
import { getAnchorLink } from "@/utils/getAnchorLink";

import styles from "./NavigationElement.module.scss";

interface NavigationElementProps {
  section: SectionType;
}

export const NavigationElement: FC<
  PropsWithChildren<NavigationElementProps>
> = ({ children, section }) => {
  const { activeSection } = useSectionContext();

  return (
    <Flex tag="li" center className={styles.element}>
      <Link
        theme={LinkTheme.WHITE}
        className={clsx(
          styles.link,
          section === activeSection && styles.active
        )}
        href={getAnchorLink(section)}
      >
        {children}
      </Link>
    </Flex>
  );
};
