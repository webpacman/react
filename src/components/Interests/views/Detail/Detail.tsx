import { FC } from "react";

import { Flex, FlexAlign, FlexDirection } from "@/common/Flex";

import { InterestDetailProps } from "../../types";
import { AdultImage } from "../AdultImage/AdultImage";
import styles from "./Detail.module.scss";

interface DetailProps {
  detail: InterestDetailProps;
}

export const Detail: FC<DetailProps> = ({ detail }) => {
  const { title, descriptions, image, imageDescription, isAdult } = detail;

  return (
    <Flex
      align={FlexAlign.CENTER}
      direction={FlexDirection.COLUMN}
      className={styles.wrapper}
    >
      <AdultImage
        src={image}
        description={imageDescription}
        isAdult={isAdult}
      />

      <p className={styles.title}>{title}</p>
      {descriptions.map((description, idx) => (
        <p key={idx} className={styles.text}>
          {description}
        </p>
      ))}
    </Flex>
  );
};
