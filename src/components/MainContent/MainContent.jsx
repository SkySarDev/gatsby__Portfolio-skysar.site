import React from "react";

import "./MainContent.scss";

const MainContent = ({ children }) => {
  return (
    <main className="main">
      <div className="main__container">{children}</div>
    </main>
  );
};

export default MainContent;
