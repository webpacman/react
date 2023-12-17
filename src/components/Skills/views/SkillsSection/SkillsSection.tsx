import { Section } from '@/common/Section';
import { SectionDescription } from '@/ui/SectionDescription';
import { Title } from '@/ui/Title';
import React, { type FC } from 'react';
import { Filters } from '../Filters/Filters';
import { Skills } from '../Skills/Skills';
import styles from './SkillsSection.module.scss';

export const SkillsSection: FC = () => {
  return (
    <Section scrollId="skills" className={styles.skills}>
      <Title as="h2">Навыки</Title>

      <SectionDescription>
        Все оценки являются субъективными и показывают уровень, который, как по
        мне, необходим для работы.
      </SectionDescription>

      <Filters />
      <Skills />
    </Section>
  );
};
