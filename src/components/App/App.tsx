import React from 'react';

import { LangContextProvider } from '@/services/LangToggler/LangTogglerContext';
import { About } from '../About';
import { Achievements } from '../Achievements';
import { Books } from '../Books';
import { ContactMe } from '../ContactMe';
import { Footer } from '../Footer';
import { HeaderSection } from '../HeaderSection';
import { HeaderTop } from '../HeaderTop';
import { Interests } from '../Interests';
import { Skills } from '../Skills';
import { Work } from '../Work';

export const App = (): React.JSX.Element => {
  // const lang = useContext(LangContext);
  // console.debug(lang);

  return (
    <LangContextProvider>
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
    </LangContextProvider>
  );
};
