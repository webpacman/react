import { FC, PropsWithChildren } from "react";

import { Section } from "@/common/Section";
import { Title } from "@/common/Title";

import { Form } from "../Form/Form";
import styles from "./ContactMe.module.scss";

export const ContactMe: FC<PropsWithChildren> = () => {
  return (
    <Section scrollId="contact-me" className={styles.wrapper}>
      <Title as="h2">Обратная связь</Title>
      <Form />
    </Section>
  );
};
