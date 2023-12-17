import { Section } from '@/common/Section';
import { Title } from '@/ui/Title/Title';
import React, { type FC } from 'react';
import { List } from '../List/List';
import styles from './Achievements.module.scss';

export const Achievements: FC = () => {
  return (
    <Section
      scrollId="achievements"
      className={styles.achievements}
      grey
      center
    >
      <Title as="h2">Достижения</Title>
      <List />
    </Section>
  );
};
