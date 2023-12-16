import React, { type FC } from 'react';

export const ContactMe: FC = () => {
  return (
    <>
      <div className="scroll_id" id="contact-me"></div>
      <section className="contact-me observer-section" data-id="contact-me">
        <div className="contact-me__wrapper">
          <h2 className="second-title">Обратная связь</h2>

          <form action="" className="contact-me__form">
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

            <div className="textarea-wrapper">
              <label className="label bold" htmlFor="message">
                Сообщение
              </label>
              <textarea
                className="textarea"
                name="message"
                placeholder="Подробно опишите, с какой целью хотите связаться со мной"
                id="message"
                cols={30}
                rows={10}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit">
              Отправить
            </button>
          </form>
        </div>

        <div className="form-result">
          <div className="form-result__content">
            <p className="form-result__text"></p>
          </div>
        </div>
      </section>
    </>
  );
};
