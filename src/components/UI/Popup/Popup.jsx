import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import { motion } from "framer-motion";

import { animations } from "utils/animations";

import IconCloseBtn from "components/assets/close-btn.svg";

import "./Popup.scss";

const Popup = ({ closePopup, message, image }) => {
  const { messages } = useIntl();

  return (
    <motion.div
      className="popup popup-notification"
      aria-hidden={true}
      onClick={closePopup}
      {...animations.opacity}
    >
      <div className="popup__content popup-notification__content">
        <div className="popup__container container">
          <motion.div
            className="popup__wrapper popup-notification__wrapper"
            aria-hidden={true}
            onClick={e => e.stopPropagation()}
            {...animations.scaling}
          >
            <div className="popup__inner">
              <IconCloseBtn
                className="popup__close"
                aria-label={"Close Popup"}
                onClick={closePopup}
              />
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
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Popup;
