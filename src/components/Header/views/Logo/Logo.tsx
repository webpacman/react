import { FC } from "react";

import { Link, LinkTheme } from "@/common/Link";
import { SectionType } from "@/constants";
import { useLang } from "@/services/LangContext";
import { getAnchorLink } from "@/utils/getAnchorLink";

import styles from "./Logo.module.scss";
import { translator } from "./translator";

export const Logo: FC = () => {
  const lang = useLang();

  return (
    <Link
      href={getAnchorLink(SectionType.HOME)}
      theme={LinkTheme.WHITE}
      className={styles.logo}
    >
      {translator.title[lang]}
    </Link>
  );
};
