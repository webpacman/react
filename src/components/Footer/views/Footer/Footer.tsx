import { FC, PropsWithChildren } from "react";

import { About } from "../About/About";
import { Socials } from "../Socials/Socials";

export const Footer: FC<PropsWithChildren> = () => {
  return (
    <footer className="footer section-grey">
      <Socials />

      <About />
    </footer>
  );
};
