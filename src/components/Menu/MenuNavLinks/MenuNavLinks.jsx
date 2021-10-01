import React from "react";
import { useIntl, Link } from "gatsby-plugin-intl";

const MenuNavLinks = ({ mobile = false, changeMenuActive }) => {
  const { messages } = useIntl();
  const links = [
    {
      title: "aboutMe",
      link: "/",
    },
    {
      title: "projects",
      link: "/projects",
    },
    {
      title: "skills",
      link: "/skills",
    },
    {
      title: "contact",
      link: "/contact",
    },
  ];

  const changeMenuActiveHandler = () => {
    if (changeMenuActive) {
      changeMenuActive(false);
    }
  };

  const LinksRender = ({ title, link, mobile }) => {
    return (
      <>
        <li
          className={`menu__nav-link ${mobile ? "menu-mobile__nav-link" : ""}`}
        >
          <Link to={link} onClick={changeMenuActiveHandler}>
            {messages[`navLink.${title}`]}
          </Link>
        </li>
        {!mobile && (
          <li className="menu__nav-dots">
            <span />
          </li>
        )}
      </>
    );
  };

  return (
    <>
      {links.map(linkItem => (
        <LinksRender {...linkItem} mobile={mobile} key={linkItem.title} />
      ))}
    </>
  );
};

export default MenuNavLinks;
