import { SectionContextProvider } from "@/services/SectionContext";

import { AboutMe } from "../AboutMe";
import { Achievements } from "../Achievements";
import { Books } from "../Books";
import { ContactMe } from "../ContactMe";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Interests } from "../Interests";
import { Skills } from "../Skills";
import { Welcome } from "../Welcome";
import { Work } from "../Work";

const App = () => {
  return (
    <SectionContextProvider>
      <Header />
      <Welcome />
      <AboutMe />
      <Achievements />
      <Skills />
      <Work />
      <Interests />
      <Books />
      <ContactMe />
      <Footer />
    </SectionContextProvider>
  );
};

export default App;
