import React from "react";
import { graphql } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";

import Layout from "components/Layout";
import { GatsbyImage } from "gatsby-plugin-image";
import MainSection from "components/MainContent/MainSection";

const Projects = ({ data }) => {
  const { locale } = useIntl();
  const { nodes } = data.allStrapiProjects;
  const { title: pageTitle } = data.allStrapiProjectsPage.nodes.find(
    item => item.locale === locale
  );
  const projectsList = nodes.filter(item => item.locale === locale);

  return (
    <Layout title={pageTitle}>
      <MainSection title={pageTitle} sectionClass={"projects"}>
        <div className="main__content row">
          <div className="projects__wrapper">
            {projectsList.map(projectItem => {
              const { id, title, description } = projectItem;

              return (
                <div key={id}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </MainSection>
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
