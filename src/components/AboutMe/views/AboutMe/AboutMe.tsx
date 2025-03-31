import { FC, PropsWithChildren } from "react";

import { Section } from "@/common/Section";

import { Details } from "../Details/Details";
import { Youtube } from "../Youtube/Youtube";
import styles from "./AboutMe.module.scss";

export const AboutMe: FC<PropsWithChildren> = () => {
  return (
    <Section scrollId="about-me" className={styles.aboutMe}>
      <Details />

      <Youtube />
    </Section>
  );
};
