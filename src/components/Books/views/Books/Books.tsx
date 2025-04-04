import { FC, PropsWithChildren } from "react";

import { Section } from "@/common/Section";
import { SectionDescription } from "@/common/SectionDescription";
import { Slider } from "@/common/Slider";
import { Title } from "@/common/Title";

import styles from "./Books.module.scss";
import { useBooks } from "./useBooks";

export const Books: FC<PropsWithChildren> = () => {
  const books = useBooks();

  return (
    <Section scrollId="books" className={styles.wrapper} center grey>
      <Title as="h2">Прочитанные книги</Title>
      <SectionDescription>
        Тут указаны не все прочитанные мной книги, а только те книги, которые
        произвели на меня наибольшее впечатление.
      </SectionDescription>

      <Slider sliderData={books} centered autoplay infinity countInView={4} />
    </Section>
  );
};
