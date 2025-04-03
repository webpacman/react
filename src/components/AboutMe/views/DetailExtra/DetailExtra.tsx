import { FC } from "react";

import { Flex, FlexDirection } from "@/common/Flex";

import styles from "./DetailExtra.module.scss";
import { useExtraDetails } from "./useExtraDetails";

export const DetailExtra: FC = () => {
  const details = useExtraDetails();

  return (
    <Flex tag="ul" direction={FlexDirection.COLUMN} className={styles.wrapper}>
      {details.map((item) => (
        <Flex key={item.title} tag="li" className={styles.element}>
          {item.icon}
          <Flex className={styles.content}>
            <span className={styles.title}>{item.title}:</span>
            {Array.isArray(item.value) ? (
              <Flex direction={FlexDirection.COLUMN}>
                {item.value.map((value) => (
                  <span className={styles.value} key={value}>
                    {value}
                  </span>
                ))}
              </Flex>
            ) : (
              <span className={styles.value}>{item.value}</span>
            )}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};
