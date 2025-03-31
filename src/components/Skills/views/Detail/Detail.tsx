import { FC, PropsWithChildren } from "react";

interface DetailProps {}

export const Detail: FC<PropsWithChildren<DetailProps>> = ({ children }) => {
  return (
    <div className="skill-card right">
      <div className="skill-card__title">
        <img src="" alt="" className="skill-card__image" />
        <span className="skill-card__name"></span>
      </div>

      <div className="skill-card__progress">
        <span className="skill-card__progress-percent"></span>
        <div className="skill-card__progress-bar">
          <div></div>
        </div>
      </div>

      <p className="skill-card__description"></p>
    </div>
  );
};
