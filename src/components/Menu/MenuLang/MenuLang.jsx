import React from "react";
import { changeLocale, useIntl } from "gatsby-plugin-intl";

import IconRu from "components/assets/lang-ru.svg";
import IconEn from "components/assets/lang-en.svg";

import "../Menu.scss";

const MenuLang = () => {
  const { locale } = useIntl();

  const changeLangHandler = () => {
    const newLang = locale === "en" ? "ru" : "en";

    changeLocale(newLang);
  };

  return (
    <button
      className="menu__lang"
      aria-label={"Switch language"}
      onClick={changeLangHandler}
    >
      {locale === "ru" ? (
        <IconEn className="menu__icons" />
      ) : (
        <IconRu className="menu__icons" />
      )}
    </button>
  );
};

export default MenuLang;
