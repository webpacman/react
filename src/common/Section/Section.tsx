import clsx from "clsx";
import { FC, PropsWithChildren, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { SectionType } from "@/constants";
import { useSectionContext } from "@/services/SectionContext";

import { Flex, FlexDirection } from "../Flex";
import styles from "./Section.module.scss";

export interface SectionProps {
  scrollId: SectionType;
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
  const { setActiveSection } = useSectionContext();

  const { ref, inView } = useInView({
    threshold: [0.4, 0.7],
  });

  useEffect(() => {
    if (inView) {
      setActiveSection(scrollId);
    }
  }, [inView, setActiveSection]);

  return (
    <>
      {scrollId !== SectionType.HOME && (
        <div className={styles.scrollId} id={scrollId} />
      )}
      <Flex
        id={scrollId === SectionType.HOME ? scrollId : undefined}
        direction={FlexDirection.COLUMN}
        tag="section"
        center={center}
        className={clsx(
          scrollId !== SectionType.HOME && styles.section,
          grey && styles.grey,
          className
        )}
        data-id={scrollId}
        ref={ref}
      >
        {children}
      </Flex>
    </>
  );
};
