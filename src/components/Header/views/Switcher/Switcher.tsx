import { FC, PropsWithChildren } from "react";

interface SwitcherProps {}

export const Switcher: FC<PropsWithChildren<SwitcherProps>> = () => {
  return (
    <div className="switcher-container block-center">
      <div className="switcher-wrapper">
        <input type="radio" name="lang" id="ru" checked />
        <label className="switcher" for="ru">
          Ru
        </label>

        <input type="radio" name="lang" id="eng" />
        <label className="switcher" for="eng">
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
