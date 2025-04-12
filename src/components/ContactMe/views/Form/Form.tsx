import { Dispatch, FC, SetStateAction } from "react";
import { useFormStatus } from "react-dom";

import { Flex, FlexJustify } from "@/common/Flex";
import { useLang } from "@/services/LangContext";

import { sendContacts } from "../../api";
import { ResultCode } from "../../constants";
import { InputBlock } from "../InputBlock/InputBlock";
import { TextareaBlock } from "../TextareaBlock/TextareaBlock";
import styles from "./Form.module.scss";
import { translator } from "./translator";

interface FormProps {
  setResult: Dispatch<SetStateAction<ResultCode | undefined>>;
  disabled: boolean;
}

export const Form: FC<FormProps> = ({ setResult, disabled }) => {
  const lang = useLang();

  const { pending } = useFormStatus();

  const submitAction = async (formData: FormData) => {
    if (disabled) {
      return;
    }

    const result = await sendContacts(formData);
    setResult(result.code);

    if (!result.success) {
      setTimeout(() => {
        setResult(undefined);
      }, 3000);
    }
  };

  return (
    <Flex
      tag="form"
      justify={FlexJustify.BETWEEN}
      className={styles.form}
      action={submitAction}
    >
      <InputBlock
        name="name"
        label={translator.name[lang].label}
        placeHolder={translator.name[lang].placeHolder}
        position="left"
      />

      <InputBlock
        name="email"
        label={translator.email[lang].label}
        placeHolder={translator.email[lang].placeHolder}
        position="right"
      />

      <TextareaBlock />

      <button type="submit" className={styles.submit} disabled={pending}>
        {translator.submit[lang].placeHolder}
      </button>
    </Flex>
  );
};
