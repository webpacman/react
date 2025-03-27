import { FC, PropsWithChildren } from "react";

import styles from "./ContactMe.module.scss";

interface ContactMeProps {}

export const ContactMe: FC<PropsWithChildren<ContactMeProps>> = ({
  children,
}) => {
  return <div className={styles.wrapper}>{children}</div>;
};
