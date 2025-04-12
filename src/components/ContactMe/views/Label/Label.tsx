import { FC, LabelHTMLAttributes, PropsWithChildren } from "react";

import { Flex, FlexAlign } from "@/common/Flex";

import styles from "./Label.module.scss";

export const Label: FC<
  PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>>
> = ({ htmlFor, children }) => {
  return (
    <Flex
      align={FlexAlign.CENTER}
      tag="label"
      className={styles.label}
      htmlFor={htmlFor}
    >
      {children}
    </Flex>
  );
};
