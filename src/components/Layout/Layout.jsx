import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "components/Header";
import Seo from "components/Seo";
import MainContent from "components/MainContent";

import "./Layout.scss";

const Layout = ({ title, children }) => {
  const currentYear = new Date().getFullYear();
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
