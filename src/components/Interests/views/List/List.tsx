import { FC } from "react";

import { Flex, FlexJustify } from "@/common/Flex";

import { InterestKey } from "../../constants";
import { Detail } from "../Detail/Detail";
import styles from "./List.module.scss";
import { useInterests } from "./useInterests";

export const List: FC = () => {
  const interests = useInterests();

  return (
    <Flex justify={FlexJustify.AROUND} className={styles.list}>
      {Object.values(InterestKey).map((interestKey) => (
        <Detail key={interestKey} detail={interests[interestKey]} />
      ))}
    </Flex>
  );
};
