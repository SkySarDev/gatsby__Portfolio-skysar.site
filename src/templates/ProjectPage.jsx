import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby-plugin-intl";

import Layout from "components/Layout";
import MainSection from "components/MainContent/MainSection";

const ProjectPage = ({ data }) => {
  const { title, full_description, github_link, link } = data.strapiProjects;

  return (
    <Layout title={title}>
      <MainSection title={title} sectionClass={"project"}>
        <p>{full_description}</p>
        {link && (
          <a href={link} target="_blank" rel="noreferrer">
            Demo
          </a>
        )}
        |
        {github_link && (
          <a href={github_link} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        <div>
          <Link to={"/projects"}>Back to Projects</Link>
        </div>
      </MainSection>
    </Layout>
  );
};

export default ProjectPage;

export const query = graphql`
  query ($slug: String, $locale: String) {
    strapiProjects(slug: { eq: $slug }, locale: { eq: $locale }) {
      title
      full_description
      link
      github_link
    }
  }
`;
