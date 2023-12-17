import { useLangContext } from '@/services/LangToggler/LangTogglerContext';
import React, { type FC } from 'react';
import { About } from '../About/About';
import { Socials } from '../Socials/Socials';

export const Footer: FC = () => {
  const { lang } = useLangContext();

  return (
    <footer className="footer section-grey">
      <Socials />
      <About />
    </footer>
  );
};
