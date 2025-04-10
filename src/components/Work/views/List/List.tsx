import { FC } from "react";

import { Flex, FlexDirection } from "@/common/Flex";

import { Detail } from "../Detail/Detail";
import styles from "./List.module.scss";
import { useWorks } from "./useWorks";

export const List: FC = () => {
  const works = useWorks();

  return (
    <Flex center direction={FlexDirection.COLUMN} className={styles.wrapper}>
      {works.map((work, idx) => (
        <Detail
          key={work.code}
          work={work}
          position={idx % 2 === 0 ? "left" : "right"}
        />
      ))}
    </Flex>
  );
};
