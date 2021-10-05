import React from "react";

import "components/MainContent/MainContent.scss";

const MainSection = ({ title, sectionClass, children }) => {
  return (
    <section className={`main__block ${sectionClass}`}>
      <div className="main__block-container container">
        <h2 className="main__title">{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default MainSection;
