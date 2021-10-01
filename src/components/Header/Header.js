import React, { useState } from "react";
import PropTypes from "prop-types";

import MenuLang from "components/Menu/MenuLang";
import MenuSocials from "components/Menu/MenuSocials";
import MenuNavLinks from "components/Menu/MenuNavLinks";

import "components/Menu/Menu.scss";

const Header = ({ siteTitle }) => {
  const [menuActive, setMenuActive] = useState(false);

  const changeMenuActive = value => setMenuActive(value);

  return (
    <header>
      <menu className={menuActive ? "menu active" : "menu"}>
        <div className="menu__mobile menu-mobile">
          <div className="container">
            <ul className="menu-mobile__nav-list">
              <MenuNavLinks mobile={true} changeMenuActive={changeMenuActive} />
            </ul>
          </div>
        </div>
        <div className="menu__container container">
          <div className="menu__row row">
            <MenuSocials />
            <nav className="menu__nav col-lg">
              <ul className="menu__nav-list">
                <MenuNavLinks />
              </ul>
            </nav>
            <div className="menu__lang-burger col-4 col-lg-1">
              <MenuLang />
              <div className="menu__burger">
                <button
                  className="menu__burger-btn"
                  aria-label={"Menu burger"}
                  onClick={() => changeMenuActive(!menuActive)}
                />
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
