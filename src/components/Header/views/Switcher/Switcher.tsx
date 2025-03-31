import { FC } from "react";

export const Switcher: FC = () => {
  return (
    <div className="switcher-container block-center">
      <div className="switcher-wrapper">
        <input type="radio" name="lang" id="ru" checked />
        <label className="switcher" htmlFor="ru">
          Ru
        </label>

        <input type="radio" name="lang" id="eng" />
        <label className="switcher" htmlFor="eng">
          Eng
        </label>

        <input type="radio" name="lang" id="chi" />
        <label className="switcher" htmlFor="chi">
          Сhi
        </label>

        <span className="lang-placeholder"></span>
      </div>
    </div>
  );
};
