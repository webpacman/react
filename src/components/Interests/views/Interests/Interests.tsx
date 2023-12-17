import { Section } from '@/common/Section';
import { Title } from '@/ui/Title';
import React, { type FC } from 'react';
import { InterestsList } from '../InterestsList/InterestsList';

export const Interests: FC = () => {
  return (
    <Section scrollId="interests">
      <Title as="h2">Интересы</Title>
      <InterestsList />
    </Section>
  );
};
