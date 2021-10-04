import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "components/Header";
import Seo from "components/Seo";

import "./Layout.scss";
import MainContent from "components/MainContent";

const Layout = ({ title, children }) => {
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
      <Header />
      <MainContent>{children}</MainContent>
      <footer className="footer">© 2021, skysar.site</footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
