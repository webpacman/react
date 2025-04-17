import { FC } from "react";

import { Flex, FlexAlign, FlexDirection } from "@/common/Flex";

import styles from "./DetailExtra.module.scss";
import { useExtraDetails } from "./useExtraDetails";

export const DetailExtra: FC = () => {
  const details = useExtraDetails();

  return (
    <Flex tag="ul" className={styles.wrapper}>
      {details.map((item) => (
        <Flex
          key={item.title}
          tag="li"
          align={FlexAlign.CENTER}
          className={styles.element}
        >
          {item.icon}
          <Flex className={styles.content} align={FlexAlign.CENTER}>
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
