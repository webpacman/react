import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

import { Flex } from "../Flex";
import styles from "./Section.module.scss";

interface SectionProps {
  scrollId: string;
  grey?: boolean;
  className?: string;
  center?: boolean;
}

export const Section: FC<PropsWithChildren<SectionProps>> = ({
  children,
  scrollId,
  grey = false,
  center = false,
  className,
}) => {
  // TODO: add observer

  return (
    <>
      <div className={styles.scrollId} id={scrollId} />
      <Flex
        tag="section"
        center={center}
        className={clsx(styles.section, grey && styles.grey, className)}
        data-id={scrollId}
      >
        {children}
      </Flex>
    </>
  );
};
