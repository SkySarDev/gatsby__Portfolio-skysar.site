import { useState } from "react";
import { useIntl } from "gatsby-plugin-intl";
import { SEND_DATA_URL } from "utils/constants";

export default function useSendMessage() {
  const { messages } = useIntl();
  const [popupHide, setPopupHide] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupImage, setPopupImage] = useState("");

  const sendData = data => {
    setPopupMessage(messages["sendMessage.sending"]);
    setPopupImage("spinner");

    fetch(SEND_DATA_URL, {
      method: "POST",
      body: new FormData(data),
    })
      .then(res => {
        if (res.status === 200) {
          setPopupMessage(messages["sendMessage.success"]);
          setPopupImage("check-yes");
          setPopupHide(true);
        } else {
          throw Error;
        }
      })
      .catch(error => {
        setPopupMessage(messages["sendMessage.error"]);
        setPopupImage("check-no");
        setPopupHide(true);
      });
  };

  return { sendData, popupHide, popupMessage, popupImage };
}
