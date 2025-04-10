import { FC, PropsWithChildren, ReactNode } from "react";

import { Flex, FlexDirection } from "@/common/Flex";

import { Title } from "../Title/Title";
import styles from "./DetailsWrapper.module.scss";

interface DetailsWrapperProps {
  title: ReactNode;
}

export const DetailsWrapper: FC<PropsWithChildren<DetailsWrapperProps>> = ({
  title,
  children,
}) => {
  return (
    <Flex direction={FlexDirection.COLUMN}>
      <Title isBlock>{title}</Title>
      <Flex tag="ul" className={styles.list}>
        {children}
      </Flex>
    </Flex>
  );
};
