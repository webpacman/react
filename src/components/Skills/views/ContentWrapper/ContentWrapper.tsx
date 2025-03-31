import { FC, PropsWithChildren } from "react";

import { Detail } from "../Detail/Detail";
import { List } from "../List/List";

interface SkillsWrapperProps {}

export const ContentWrapper: FC<PropsWithChildren<SkillsWrapperProps>> = ({
  children,
}) => {
  return (
    <div className="skills-wrapper">
      <List />
      <Detail />
    </div>
  );
};
