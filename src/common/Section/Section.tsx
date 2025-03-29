import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

import { Flex } from "../Flex";
import styles from "./Section.module.scss";

interface SectionProps {
  scrollId: string;
  grey?: boolean;
  className?: string;
}

export const Section: FC<PropsWithChildren<SectionProps>> = ({
  children,
  scrollId,
  grey = false,
  className,
}) => {
  // TODO: add observer

  return (
    <>
      <div className={styles.scrollId} id={scrollId} />
      <Flex
        tag="section"
        center
        className={clsx(styles.section, grey && styles.grey, className)}
        data-id={scrollId}
      >
        {children}
      </Flex>
    </>
  );
};
