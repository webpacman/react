import { Section } from '@/common/Section';
import { useLangContext } from '@/services/LangToggler/LangTogglerContext';
import { Title } from '@/ui/Title';
import React, { type FC } from 'react';
import { WorkList } from '../WorkList/WorkList';

export const Work: FC = () => {
  const { setLang } = useLangContext();

  return (
    <Section scrollId="work" grey>
      <Title as="h2">Работа</Title>
      <WorkList />
    </Section>
  );
};
