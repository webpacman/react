import { Section } from '@/common/Section';
import { useLangContext } from '@/services/LangToggler/LangTogglerContext';
import React, { type FC } from 'react';

import { Description } from '../Description/Description';
import { YouTube } from '../YouTube/YouTube';
import styles from './About.module.scss';

export const About: FC = () => {
  const { lang } = useLangContext();

  return (
    <Section scrollId={'about-me'} className={styles.aboutMe}>
      <Description />
      <YouTube />
    </Section>
  );
};
