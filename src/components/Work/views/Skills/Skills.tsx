import { FC, PropsWithChildren } from "react";

interface SkillsProps {}

export const Skills: FC<PropsWithChildren<SkillsProps>> = ({ children }) => {
  return (
    <>
      <p className="work-element__block-title bold">Навыки</p>
      <ul className="work-element__skills">
        <li className="work-element__skills-element">html+</li>
        <li className="work-element__skills-element">css+</li>
        <li className="work-element__skills-element">javascript+</li>
        <li className="work-element__skills-element">blockchain</li>
        <li className="work-element__skills-element">node.js</li>
        <li className="work-element__skills-element">python</li>
        <li className="work-element__skills-element">django</li>
        <li className="work-element__skills-element">mongodb</li>
        <li className="work-element__skills-element">postgresql</li>
        <li className="work-element__skills-element">team lead skills</li>
      </ul>
    </>
  );
};
