import React from "react";

import IconGithub from "components/assets/github.svg";
import IconInstagram from "components/assets/instagram.svg";
import IconTelegram from "components/assets/telegram.svg";
import IconVk from "components/assets/vk.svg";

import "./MenuSocials.scss";

const MenuSocials = () => {
  const SocialsItemRender = ({ link, children }) => {
    return (
      <li className="menu__socials-item">
        <a href={link} target="_blank" rel="noreferrer">
          {children}
        </a>
      </li>
    );
  };

  return (
    <div className="menu__socials col col-lg-3">
      <ul className="menu__socials-list">
        <SocialsItemRender link={"https://github.com/SkySarDev"}>
          <IconGithub className="menu__icons" />
        </SocialsItemRender>
        <SocialsItemRender link={"https://www.instagram.com/webdev_ru"}>
          <IconInstagram className="menu__icons" />
        </SocialsItemRender>
        <SocialsItemRender link={"https://t.me/skysar_dev"}>
          <IconTelegram className="menu__icons" />
        </SocialsItemRender>
        <SocialsItemRender link={"https://vk.com/webdev_ru"}>
          <IconVk className="menu__icons" />
        </SocialsItemRender>
      </ul>
    </div>
  );
};

export default MenuSocials;
