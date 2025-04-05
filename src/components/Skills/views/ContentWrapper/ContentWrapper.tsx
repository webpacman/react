import { FC, useState } from "react";

import { SkillFilter } from "../../constants";
import { Filters } from "../Filters/Filters";
import { ListWrapper } from "../ListWrapper/ListWrapper";

export const ContentWrapper: FC = () => {
  const [filter, setFilter] = useState<SkillFilter>(SkillFilter.ALL);

  return (
    <>
      <Filters filter={filter} setFilter={setFilter} />
      <ListWrapper filter={filter} />
    </>
  );
};
