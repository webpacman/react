import { FC, PropsWithChildren } from "react";

import { Section } from "@/common/Section";
import { SectionDescription } from "@/common/SectionDescription";
import { Title } from "@/common/Title";

import { List } from "../List/List";
import styles from "./Books.module.scss";

export const Books: FC<PropsWithChildren> = () => {
  return (
    <Section scrollId="books" className={styles.wrapper}>
      <Title as="h2">Прочитанные книги</Title>
      <SectionDescription>
        Тут указаны не все прочитанные мной книги, а только те книги, которые
        произвели на меня наибольшее впечатление.
      </SectionDescription>

      <List />
    </Section>
  );
};
