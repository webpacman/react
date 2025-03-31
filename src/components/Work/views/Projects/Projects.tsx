import { FC, PropsWithChildren } from "react";

interface ProjectsProps {}

export const Projects: FC<PropsWithChildren<ProjectsProps>> = ({
  children,
}) => {
  return (
    <>
      <p className="work-element__block-title bold">Проекты</p>
      <ul className="work-element__projects">
        <li className="work-element__projects-element work-project">
          <span className="work-project__title">Интерфейсы support</span>
          <div className="work-tooltip">
            <p className="work-project__description">...</p>
          </div>
        </li>
        <li className="work-element__projects-element work-project">
          <span className="work-project__title">WebTMA</span>
          <div className="work-tooltip">
            <p className="work-project__description">
              Сайт для российской команды поддержки WebTMA webtma.ru (сейчас
              недоступен)
            </p>
          </div>
        </li>
        <li className="work-element__projects-element work-project">
          <span className="work-project__title">
            RR, DY, Flocktory, Diginetica, Mindbox...
          </span>
          <div className="work-tooltip">
            <p className="work-project__description">...</p>
          </div>
        </li>
        <li className="work-element__projects-element work-project">
          <span className="work-project__title">more...</span>
          <div className="work-tooltip">
            <p className="work-project__description">...</p>
          </div>
        </li>
      </ul>
    </>
  );
};
