import { FC, PropsWithChildren } from "react";

interface HamburgerProps {}

export const Hamburger: FC<PropsWithChildren<HamburgerProps>> = () => {
  return (
    <>
      <input
        className="checkbox"
        type="checkbox"
        name="hamburger"
        id="hamburger"
      />
      <label htmlFor="hamburger" className="menu-hamburger">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </label>
    </>
  );
};
