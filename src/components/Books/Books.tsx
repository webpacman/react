import { FC, PropsWithChildren } from "react";

import { Section } from "@/common/Section";
import { SectionTitle } from "@/common/SectionTitle";

import styles from "./Books.module.scss";

export const Books: FC<PropsWithChildren> = () => {
  return (
    <Section scrollId="books" className={styles.wrapper}>
      <SectionTitle>Прочитанные книги</SectionTitle>
      <p className="section-description">
        Тут указаны не все прочитанные мной книги, а только те книги, которые
        произвели на меня наибольшее впечатление.
      </p>

      <div className="books-list"></div>
    </Section>
  );
};
