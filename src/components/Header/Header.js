import * as React from "react";
import PropTypes from "prop-types";
import { useIntl } from "gatsby-plugin-intl";

import "./Header.scss";

const Header = ({ siteTitle }) => {
  const { messages } = useIntl();

  return (
    <header>
      <menu className="menu">
        <div className="menu__mobile menu-mobile">
          <div className="container">
            <ul className="menu-mobile__nav-list">
              <li className="menu__nav-link menu-mobile__nav-link">
                <a className="menu-mobile__link" href="#about">
                  About me
                </a>
              </li>
              <li className="menu__nav-link menu-mobile__nav-link">
                <a className="menu-mobile__link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="menu__nav-link menu-mobile__nav-link">
                <a className="menu-mobile__link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="menu__nav-link menu-mobile__nav-link">
                <a className="menu-mobile__link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="menu__container container">
          <div className="menu__row row">
            <div className="menu__socials col col-lg-3">
              <ul className="menu__socials-list">
                <li className="menu__socials-item">
                  <a href="https://github.com/SkySarDev" target="_blank">
                    SVG GITH
                  </a>
                </li>
                <li className="menu__socials-item">
                  <a href="https://www.instagram.com/webdev_ru" target="_blank">
                    SVG INST
                  </a>
                </li>
                <li className="menu__socials-item">
                  <a href="https://t.me/skysar_dev" target="_blank">
                    SVG TG
                  </a>
                </li>
                <li className="menu__socials-item">
                  <a href="https://vk.com/webdev_ru" target="_blank">
                    SVG VK
                  </a>
                </li>
              </ul>
            </div>
            <nav className="menu__nav col-lg">
              <ul className="menu__nav-list">
                <li className="menu__nav-link">
                  <a href="#about">About me</a>
                </li>
                <li className="menu__nav-dots">
                  <span />
                </li>
                <li className="menu__nav-link">
                  <a href="#projects">Projects</a>
                </li>
                <li className="menu__nav-dots">
                  <span />
                </li>
                <li className="menu__nav-link">
                  <a href="#skills">Skills</a>
                </li>
                <li className="menu__nav-dots">
                  <span />
                </li>
                <li className="menu__nav-link">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
            <div className="menu__lang-burger col-4 col-lg-1">
              <div className="menu__lang" data-lang="ru">
                <a href="/ru">SVG lang</a>
              </div>
              <div className="menu__burger">
                <button className="menu__burger-btn" id="burger-btn" />
              </div>
            </div>
          </div>
        </div>
      </menu>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
