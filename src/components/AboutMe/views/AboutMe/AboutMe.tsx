import { FC, PropsWithChildren } from "react";

import { Section } from "@/common/Section";
import { SectionType } from "@/constants";

import { Details } from "../Details/Details";
import { Youtube } from "../Youtube/Youtube";
import styles from "./AboutMe.module.scss";

export const AboutMe: FC<PropsWithChildren> = () => {
  return (
    <Section scrollId={SectionType.ABOUT_ME} className={styles.aboutMe}>
      <Details />

      <Youtube />
    </Section>
  );
};
