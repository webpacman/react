import { FC, useState } from "react";

import { Section } from "@/common/Section";
import { Title } from "@/common/Title";
import { ALREADY_SEND_KEY, SectionType } from "@/constants";
import { useLang } from "@/services/LangContext";

import { ResultCode } from "../../constants";
import { Form } from "../Form/Form";
import { Result } from "../Result/Result";
import styles from "./ContactMe.module.scss";
import { translator } from "./translator";

export const ContactMe: FC = () => {
  const lang = useLang();

  const [result, setResult] = useState<ResultCode | undefined>(
    window.localStorage.getItem(ALREADY_SEND_KEY)
      ? ResultCode.ALREADY_SEND
      : undefined
  );

  return (
    <Section scrollId={SectionType.CONTACT_ME} className={styles.wrapper}>
      <div className={result && styles.blur}>
        <Title as="h2">{translator.title[lang]}</Title>
        <Form setResult={setResult} disabled={!!result} />
      </div>
      {result && <Result code={result} />}
    </Section>
  );
};
