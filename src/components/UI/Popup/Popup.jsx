import React from "react";

import "./Popup.scss";

const Popup = () => {
  return (
    <div className="popup popup-notification show">
      <div className="popup__content popup-notification__content show">
        <div className="popup__container container">
          <div className="popup__wrapper popup-notification__wrapper">
            <div className="popup__inner">
              X{/*<svg className="popup__close">*/}
              {/*  <use xlink:href="#close-btn"></use>*/}
              {/*</svg>*/}
              <h3 className="popup__title">Notification</h3>
              <div className="popup-notification__body">
                <p className="popup-notification__message" />
                <div className="popup-notification__img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
