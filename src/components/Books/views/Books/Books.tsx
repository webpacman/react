import { Section } from '@/common/Section';
import { SectionDescription } from '@/ui/SectionDescription';
import { Title } from '@/ui/Title';
import React, { type FC } from 'react';
import { BooksList } from '../BooksList/BooksList';

export const Books: FC = () => {
  return (
    <Section scrollId="books" grey center>
      <Title as="h2">Прочитанные книги</Title>

      <SectionDescription>
        Тут указаны не все прочитанные мной книги, а только те книги, которые
        произвели на меня наибольшее впечатление.
      </SectionDescription>

      <BooksList />
    </Section>
  );
};
