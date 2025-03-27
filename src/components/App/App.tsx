import { AboutMe } from "../AboutMe/AboutMe";
import { Achievements } from "../Achievements/Achievements";
import { Books } from "../Books/Books";
import { ContactMe } from "../ContactMe/ContactMe";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Interests } from "../Interests/Interests";
import { Skills } from "../Skills/Skills";
import { Welcome } from "../Welcome/Welcome";
import { Work } from "../Work/Work";

export const App = () => {
  return (
    <>
      <Header title="Виталий Шевчук" />
      <Welcome>
        <h1>Виталий Шевчук</h1>
        <p>
          Я - разработчик, который любит создавать красивые и функциональные
          веб-приложения.
        </p>
      </Welcome>
      <AboutMe>
        <h2>Обо мне</h2>
        <p>
          Я - разработчик, который любит создавать красивые и функциональные
          веб-приложения.
        </p>
      </AboutMe>
      <Achievements>
        <h2>Достижения</h2>
        <p>
          Я - разработчик, который любит создавать красивые и функциональные
          веб-приложения.
        </p>
      </Achievements>
      <Skills>
        <h2>Навыки</h2>
        <p>
          Я - разработчик, который любит создавать красивые и функциональные
          веб-приложения.
        </p>
      </Skills>
      <Work>
        <h2>Работа</h2>
        <p>
          Я - разработчик, который любит создавать красивые и функциональные
          веб-приложения.
        </p>
      </Work>
      <Interests>
        <h2>Интересы</h2>
        <p>
          Я - разработчик, который любит создавать красивые и функциональные
          веб-приложения.
        </p>
      </Interests>
      <Books>
        <h2>Книги</h2>
        <p>
          Я - разработчик, который любит создавать красивые и функциональные
          веб-приложения.
        </p>
      </Books>
      <ContactMe>
        <h2>Контакты</h2>
        <p>
          Я - разработчик, который любит создавать красивые и функциональные
          веб-приложения.
        </p>
      </ContactMe>
      <Footer>
        <p>
          Я - разработчик, который любит создавать красивые и функциональные
          веб-приложения.
        </p>
      </Footer>
    </>
  );
};
