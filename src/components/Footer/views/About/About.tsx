import { FC, PropsWithChildren } from "react";

interface AboutProps {}

export const About: FC<PropsWithChildren<AboutProps>> = ({ children }) => {
  return (
    <p className="footer-about">
      &copy;&nbsp;Шевчук&nbsp;Виталий 1995&nbsp;-&nbsp;2023
    </p>
  );
};
