import { AboutMe } from "../AboutMe/AboutMe";
import { Achievements } from "../Achievements/Achievements";
import { Books } from "../Books/Books";
import { ContactMe } from "../ContactMe/ContactMe";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header";
import { Interests } from "../Interests/Interests";
import { Skills } from "../Skills/Skills";
import { Welcome } from "../Welcome/Welcome";
import { Work } from "../Work/Work";

export const App = () => {
  return (
    <>
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
    </>
  );
};
