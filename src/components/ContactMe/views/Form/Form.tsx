import { FC, PropsWithChildren } from "react";

import { InputBlock } from "../InputBlock/InputBlock";
import { TextareaBlock } from "../TextareaBlock/TextareaBlock";
interface FormProps {}

export const Form: FC<PropsWithChildren<FormProps>> = ({ children }) => {
  return (
    <form action="" className="contact-me__form">
      <InputBlock />
      <div className="input-wrapper left">
        <label className="label bold" htmlFor="name">
          Имя
        </label>
        <input
          className="input"
          type="text"
          name="name"
          id="name"
          placeholder="Введите ваше имя"
          required
        />
      </div>
      <div className="input-wrapper right">
        <label className="label bold" htmlFor="email">
          E-mail
        </label>
        <input
          className="input"
          type="email"
          name="email"
          id="email"
          placeholder="Введите ваш e-mail адрес"
          required
        />
      </div>
      <div className="cls"></div>

      <TextareaBlock />

      <button type="submit" className="submit">
        Отправить
      </button>
    </form>
  );
};
