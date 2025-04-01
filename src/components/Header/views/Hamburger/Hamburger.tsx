import clsx from "clsx";
import { Dispatch, FC, SetStateAction } from "react";

import styles from "./Hamburger.module.scss";

interface HamburgerProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const Hamburger: FC<HamburgerProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  return (
    <>
      <input
        className={styles.checkbox}
        type="checkbox"
        name="hamburger"
        id="hamburger"
        checked={isMenuOpen}
        onChange={() => setIsMenuOpen((prev) => !prev)}
      />
      <label htmlFor="hamburger" className={styles.hamburger}>
        {new Array(3).fill(null).map((_, index) => (
          <span
            key={index}
            className={clsx(styles.line, styles[`line${index + 1}`])}
          ></span>
        ))}
      </label>
    </>
  );
};
