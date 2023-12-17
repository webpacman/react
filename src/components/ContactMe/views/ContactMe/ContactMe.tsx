import { Section } from '@/common/Section';
import { Title } from '@/ui/Title';
import React, { type FC } from 'react';
import { FormWrapper } from '../FormWrapper/FormWrapper';

export const ContactMe: FC = () => {
  return (
    <Section scrollId="contact-me">
      <Title as="h2">Обратная связь</Title>
      <FormWrapper />
    </Section>
  );
};
