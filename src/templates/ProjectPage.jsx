import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useIntl, Link } from "gatsby-plugin-intl";

import Layout from "components/Layout";
import MainSection from "components/MainContent/MainSection";

import IconLink from "components/assets/link.svg";
import IconGitHub from "components/assets/github.svg";

import "./ProjectPage.scss";

const ProjectPage = ({ data }) => {
  const { messages } = useIntl();
  const { title, full_description, link, github_link, full_img } =
    data.strapiProjects;
  const image = getImage(full_img.localFile);

  const LinkButton = ({ link, children }) => {
    return (
      <div className="col-5 col-sm-4 col-md-3 col-lg-2">
        <a href={link} target="_blank" rel="noreferrer">
          <div className="project__button button">{children}</div>
        </a>
      </div>
    );
  };

  return (
    <Layout title={title}>
      <MainSection title={title} sectionClass={"project"}>
        <div className="main__content row">
          <p className="project__description">{full_description}</p>
          <div className="project__nav row">
            {link && (
              <LinkButton link={link}>
                <IconLink /> {messages["projectPage.demo"]}
              </LinkButton>
            )}
            {github_link && (
              <LinkButton link={github_link}>
                <IconGitHub /> GitHub
              </LinkButton>
            )}
          </div>
          <div className="project__img">
            <GatsbyImage alt={title} image={image} />
          </div>
          <div className="back-block">
            <Link to={"/projects"}>
              <div className="back-block__button button">
                {messages["projectPage.backButton"]}
              </div>
            </Link>
          </div>
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
      full_img {
        localFile {
          childImageSharp {
            gatsbyImageData(
              formats: [AUTO, WEBP, AVIF]
              placeholder: TRACED_SVG
            )
          }
        }
      }
    }
  }
`;
