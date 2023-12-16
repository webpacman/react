import { Section } from '@/common/Section';
import React, { type FC } from 'react';
import styles from './Achievements.module.scss';

export const Achievements: FC = () => {
  return (
    <Section
      scrollId="achievements"
      className={styles.achievements}
      grey
      center
    >
      <h2 className="second-title">Достижения</h2>

      <div className="achievements-list"></div>
    </Section>
  );
};
