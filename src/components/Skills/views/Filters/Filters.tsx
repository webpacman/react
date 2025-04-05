import clsx from "clsx";
import { Dispatch, FC, SetStateAction } from "react";

import { Flex } from "@/common/Flex";
import { useLang } from "@/services/LangContext";

import { SkillFilter } from "../../constants";
import styles from "./Filters.module.scss";
import { translator } from "./translator";

interface FiltersProps {
  filter: SkillFilter;
  setFilter: Dispatch<SetStateAction<SkillFilter>>;
}

export const Filters: FC<FiltersProps> = ({ filter, setFilter }) => {
  const lang = useLang();

  return (
    <Flex center className={styles.wrapper}>
      {Object.entries(translator).map(([key, value]) => (
        <button
          className={clsx(styles.filter, filter === key && styles.active)}
          key={key}
          onClick={() => setFilter(key as SkillFilter)}
        >
          {value[lang]}
        </button>
      ))}
    </Flex>
  );
};
