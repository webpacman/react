import { Flex, FlexAlign, FlexJustify } from '@/common/Flex';
import { LangVariants } from '@/services/LangToggler/LangTogglerContext';
import React, { memo, type FC } from 'react';
import { SwitchElement } from '../SwitchElement/SwitchElement';
import styles from './Switcher.module.scss';

export const Switcher: FC = memo(() => {
  // TODO: rerenders console.debug('Here');

  return (
    <Flex
      align={FlexAlign.CENTER}
      justify={FlexJustify.CENTER}
      className={styles.wrapper}
    >
      <Flex align={FlexAlign.CENTER} className={styles.switcher}>
        {Object.values(LangVariants).map((lang) => (
          <SwitchElement key={lang} lang={lang} />
        ))}

        <span className={styles.langPlaceholder} id="placeholder" />
      </Flex>
    </Flex>
  );
});

Switcher.displayName = 'Switcher';
