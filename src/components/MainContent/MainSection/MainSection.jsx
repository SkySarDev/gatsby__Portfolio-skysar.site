import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const MainSection = ({ title, sectionClass, children }) => {
  return (
    <section className={`main__block ${sectionClass}`}>
      <div className="main__block-container container">
        <h2 className="main__title">{title}</h2>
        {children}
        <div className="main__nav main-nav row">
          <div className="main-nav__button col-5 col-sm-4 col-md-3 col-lg-2">
            <a
              className="main-nav__link main-nav__link--first button"
              href="#contact"
            >
              &#8592; Contact
            </a>
          </div>
          <div className="main-nav__button col-5 col-sm-4 col-md-3 col-lg-2">
            <a className="main-nav__link button" href="#projects">
              Projects &#8594;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
