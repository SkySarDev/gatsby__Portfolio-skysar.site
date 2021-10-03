import React from "react";
import { graphql } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";

import Layout from "components/Layout";
import Seo from "components/seo";

const Projects = ({ data }) => {
  const { locale } = useIntl();
  const { nodes } = data.allStrapiProjects;
  const { title: pageTitle } = data.allStrapiProjectsPage.nodes.find(
    item => item.locale === locale
  );
  const projectsList = nodes.filter(item => item.locale === locale);

  return (
    <Layout>
      <Seo title={pageTitle} />
      <h1>{pageTitle}</h1>

      {projectsList.map(projectItem => {
        const { id, title, description } = projectItem;

        return (
          <div key={id}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        );
      })}
    </Layout>
  );
};

export default Projects;

export const query = graphql`
  query Projects {
    allStrapiProjectsPage {
      nodes {
        locale
        title
      }
    }
    allStrapiProjects {
      nodes {
        id
        title
        locale
        description
      }
    }
  }
`;
