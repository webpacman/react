import clsx from "clsx";
import { FC } from "react";
import { useInView } from "react-intersection-observer";

import { Flex, FlexDirection } from "@/common/Flex";
import { useLang } from "@/services/LangContext";

import { WorkProps } from "../../types";
import { Projects } from "../Projects/Projects";
import { Skills } from "../Skills/Skills";
import { Title } from "../Title/Title";
import styles from "./Detail.module.scss";
import { translator } from "./translator";

interface DetailProps {
  work: WorkProps;
  position: "left" | "right";
}

export const Detail: FC<DetailProps> = ({ work, position }) => {
  const lang = useLang();

  const { title, dateStart, dateEnd, skills, projects } = work;

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div
      className={clsx(
        styles.element,
        inView && styles.animation,
        styles[position]
      )}
      data-year={dateStart.getFullYear()}
      ref={ref}
    >
      <Title>{title}</Title>
      <p className={styles.description}>
        {dateStart.toLocaleDateString(translator.locale[lang], {
          month: "long",
          year: "numeric",
        })}{" "}
        {dateEnd ? (
          <>
            -{" "}
            {dateEnd?.toLocaleDateString(translator.locale[lang], {
              month: "long",
              year: "numeric",
            })}
          </>
        ) : (
          translator.date[lang]
        )}
      </p>

      <Flex direction={FlexDirection.COLUMN} className={styles.wrapper}>
        {!!projects && <Projects projects={projects} />}

        <Skills skills={skills} />
      </Flex>
    </div>
  );
};
