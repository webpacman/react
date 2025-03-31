import { FC, PropsWithChildren } from "react";

interface SkillsListProps {}

export const List: FC<PropsWithChildren<SkillsListProps>> = ({ children }) => {
  return <div className="skills-list left"></div>;
};
