import { FC, PropsWithChildren } from "react";

interface TextareaBlockProps {}

export const TextareaBlock: FC<PropsWithChildren<TextareaBlockProps>> = ({
  children,
}) => {
  return (
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
  );
};
