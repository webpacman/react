import { FC, PropsWithChildren } from "react";

interface DetailProps {}

export const Detail: FC<PropsWithChildren<DetailProps>> = ({ children }) => {
  return (
    <div className="interest-wrapper">
      <div className="overlay block-center">
        <div className="overlay__block block-center">
          <p className="overlay__text bold">
            Нажимая, Вы подтверждаете свой возраст&nbsp;&nbsp;18&nbsp;лет.
          </p>
        </div>
        <img
          src="images/vshevchuk.webp"
          alt=""
          className="interest-image overlay__image"
        />
      </div>

      <p className="interest-title bold">Lorem ipsum dolor sit amet.</p>
      <p className="interest-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus est
        iure laborum magni neque nihil nostrum, nulla quam quia sint?
      </p>
      <p className="interest-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus est
        iure laborum magni neque nihil nostrum, nulla quam quia sint?
      </p>
      <p className="interest-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus est
        iure laborum magni neque nihil nostrum, nulla quam quia sint?
      </p>
    </div>
  );
};
