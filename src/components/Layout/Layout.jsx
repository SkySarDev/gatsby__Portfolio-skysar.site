import React from "react";

import Header from "components/Header";
import Seo from "components/Seo";
import MainContent from "components/MainContent";

import "./Layout.scss";

const Layout = ({ title, children }) => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Seo title={title} />
      <div className="wrapper">
        <Header />
        <MainContent>{children}</MainContent>
        <footer className="footer">© 2020-{currentYear}, skysar.site</footer>
      </div>
    </>
  );
};
export default Layout;
