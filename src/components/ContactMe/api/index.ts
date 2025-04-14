import { ALREADY_SEND_KEY } from "@/constants";

import { ResultCode } from "../constants";

export const sendContacts = async (
  formData: FormData
): Promise<{ success: boolean; code: ResultCode }> => {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      return { success: false, code: ResultCode.ERROR_FIELD };
    }

    if (typeof message === "string" && message?.length < 20) {
      return {
        success: false,
        code: ResultCode.ERROR_MIN_LENGTH,
      };
    }

    const response = await fetch("/_ajax/telegram.php", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    console.debug(data);

    if (data.status !== "success") {
      return {
        success: false,
        code: ResultCode.ERROR_REQUEST,
      };
    }

    window.localStorage.setItem(ALREADY_SEND_KEY, "1");

    return {
      success: true,
      code: ResultCode.SUCCESS,
    };
  } catch {
    return {
      success: false,
      code: ResultCode.ERROR,
    };
  }
};
