import clsx from "clsx";
import { FC } from "react";

import { FieldProps } from "../../types";
import { Label } from "../Label/Label";
import styles from "./InputBlock.module.scss";

interface InputBlockProps extends FieldProps {
  position: "left" | "right";
}

export const InputBlock: FC<InputBlockProps> = ({
  label,
  name,
  placeHolder,
  position,
}) => {
  return (
    <div className={clsx(styles.wrapper, styles[position])}>
      <Label htmlFor={name}>{label}</Label>
      <input
        className={styles.input}
        type="text"
        name={name}
        id={name}
        placeholder={placeHolder}
        required
      />
    </div>
  );
};
