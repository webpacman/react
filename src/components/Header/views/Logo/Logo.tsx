import { FC, PropsWithChildren } from "react";

interface LogoProps {}

export const Logo: FC<PropsWithChildren<LogoProps>> = () => {
  return (
    <a href="#home" className="link logo block-center">
      Виталий Шевчук
    </a>
  );
};
