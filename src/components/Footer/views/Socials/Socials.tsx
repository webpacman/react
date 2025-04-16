import { FC, SVGProps } from "react";

import { Flex } from "@/common/Flex";

import TelegramIcon from "./assets/telegram.svg?react";
import VkIcon from "./assets/vk.svg?react";
import styles from "./Socials.module.scss";

interface Social {
  href: string;
  icon: FC<SVGProps<SVGSVGElement>>;
}

const socials: Social[] = [
  {
    href: "https://vk.com/id15669425",
    icon: VkIcon,
  },
  {
    href: "https://t.me/vita1yaa",
    icon: TelegramIcon,
  },
];

export const Socials: FC = () => {
  return (
    <Flex tag="ul" className={styles.socials}>
      {socials.map(({ href, icon: Icon }) => (
        <li className={styles.socialElement} key={href}>
          <Flex
            tag="a"
            center
            href={href}
            target="_blank"
            className={styles.link}
          >
            <Icon className={styles.icon} />
          </Flex>
        </li>
      ))}
    </Flex>
  );
};
