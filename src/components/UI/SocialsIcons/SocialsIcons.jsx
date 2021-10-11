import React from "react";

import { SOCIALS_LINKS } from "utils/constants";

import IconGithub from "components/assets/github.svg";
import IconInstagram from "components/assets/instagram.svg";
import IconTelegram from "components/assets/telegram.svg";
import IconVk from "components/assets/vk.svg";

import "./SocialsIcons.scss";

const SocialsIcons = ({ listClass, itemsClass, iconsClass }) => {
  const { github, instagram, telegram, vk } = SOCIALS_LINKS;

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
      <SocialsItemRender link={github}>
        <IconGithub className={iconsClass} />
      </SocialsItemRender>
      <SocialsItemRender link={instagram}>
        <IconInstagram className={iconsClass} />
      </SocialsItemRender>
      <SocialsItemRender link={telegram}>
        <IconTelegram className={iconsClass} />
      </SocialsItemRender>
      <SocialsItemRender link={vk}>
        <IconVk className={iconsClass} />
      </SocialsItemRender>
    </ul>
  );
};

export default SocialsIcons;
