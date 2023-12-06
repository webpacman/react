import React from 'react';

import { LangContextProvider } from '@/services/LangToggler/LangTogglerContext';
import { About } from '../About/About';
import { Achievements } from '../Achievements/Achievements';
import { Books } from '../Books/Books';
import { ContactMe } from '../ContactMe/ContactMe';
import { Footer } from '../Footer/Footer';
import { HeaderSection } from '../HeaderSection/HeaderSection';
import { HeaderTop } from '../HeaderTop/HeaderTop';
import { Interests } from '../Interests/Interests';
import { Skills } from '../Skills/Skills';
import { Work } from '../Work/Work';
import styles from './App.module.scss';

export const App = (): React.JSX.Element => {
  // const lang = useContext(LangContext);
  // console.debug(lang);

  return (
    <LangContextProvider>
      <div className={styles.App}>
        <HeaderTop />
        <HeaderSection />
        <About />
        <Achievements />
        <Skills />
        <Work />
        <Interests />
        <Books />
        <ContactMe />
        <Footer />
      </div>
    </LangContextProvider>
  );
};
