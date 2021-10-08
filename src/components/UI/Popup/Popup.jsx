import React from "react";
import { useIntl } from "gatsby-plugin-intl";

import IconCloseBtn from "components/assets/close-btn.svg";

import "./Popup.scss";

const Popup = ({ closePopup, message, image }) => {
  const { messages } = useIntl();

  return (
    <div className="popup popup-notification" onClick={closePopup}>
      <div className="popup__content popup-notification__content">
        <div className="popup__container container">
          <div
            className="popup__wrapper popup-notification__wrapper"
            onClick={e => e.stopPropagation()}
          >
            <div className="popup__inner">
              <IconCloseBtn className="popup__close" onClick={closePopup} />
              <h3 className="popup__title">{messages["popup.title"]}</h3>
              <div className="popup-notification__body">
                <p className="popup-notification__message">{message}</p>
                <div className="popup-notification__img">
                  <img
                    src={require(`images/${image}.svg`).default}
                    alt="Status"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
