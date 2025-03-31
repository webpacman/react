import { FC, PropsWithChildren } from "react";

import { Projects } from "../Projects/Projects";
import { Skills } from "../Skills/Skills";
interface DetailProps {}

export const Detail: FC<PropsWithChildren<DetailProps>> = ({ children }) => {
  return (
    <div
      className="work-element work-element__animation right"
      data-year="2018"
    >
      <div className="work-element__content">
        <p className="work-element__title bold">ООО "М Тех"</p>
        <p className="work-element__description">
          с ноября 2018 по настоящее время
        </p>

        <Projects />

        <Skills />
      </div>
    </div>
  );
};
