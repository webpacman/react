import { FC, PropsWithChildren } from "react";

interface InputBlockProps {}

export const InputBlock: FC<PropsWithChildren<InputBlockProps>> = ({
  children,
}) => {
  return (
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
  );
};
