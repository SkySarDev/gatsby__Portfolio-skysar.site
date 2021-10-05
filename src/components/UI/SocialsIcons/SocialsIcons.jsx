import React from "react";

import IconGithub from "components/assets/github.svg";
import IconInstagram from "components/assets/instagram.svg";
import IconTelegram from "components/assets/telegram.svg";
import IconVk from "components/assets/vk.svg";

import "./SocialsIcons.scss";

const SocialsIcons = ({ listClass, itemsClass, iconsClass }) => {
  const SocialsItemRender = ({ link, children }) => {
    return (
      <li className={itemsClass}>
        <a href={link} target="_blank" rel="noreferrer">
          {children}
        </a>
      </li>
    );
  };

  return (
    <ul className={listClass}>
      <SocialsItemRender link={"https://github.com/SkySarDev"}>
        <IconGithub className={iconsClass} />
      </SocialsItemRender>
      <SocialsItemRender link={"https://www.instagram.com/webdev_ru"}>
        <IconInstagram className={iconsClass} />
      </SocialsItemRender>
      <SocialsItemRender link={"https://t.me/skysar_dev"}>
        <IconTelegram className={iconsClass} />
      </SocialsItemRender>
      <SocialsItemRender link={"https://vk.com/webdev_ru"}>
        <IconVk className={iconsClass} />
      </SocialsItemRender>
    </ul>
  );
};

export default SocialsIcons;
