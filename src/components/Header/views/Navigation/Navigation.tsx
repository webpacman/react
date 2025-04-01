import { FC } from "react";

import { Flex } from "@/common/Flex";

import { NavigationElement } from "../NavigationElement/NavigationElement";
import styles from "./Navigation.module.scss";
import { useNavigation } from "./useNavigation";

export const Navigation: FC = () => {
  const navigation = useNavigation();

  return (
    <nav>
      <Flex tag="ul" center className={styles.menu}>
        {navigation.map(({ section, content }) => (
          <NavigationElement key={section} section={section}>
            {content}
          </NavigationElement>
        ))}
      </Flex>
    </nav>
  );
};
