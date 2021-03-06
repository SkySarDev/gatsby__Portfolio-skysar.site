import React from "react";
import { graphql } from "gatsby";
import { useIntl, Link } from "gatsby-plugin-intl";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

import { animations } from "utils/animations";

import Layout from "components/Layout";
import MainSection from "components/MainContent/MainSection";

import "components/MainContent/MainContentProjects.scss";

const Projects = ({ data }) => {
  const { locale } = useIntl();
  const { nodes } = data.allStrapiProjects;
  const { title: pageTitle, more } = data.allStrapiProjectsPage.nodes.find(
    item => item.locale === locale
  );
  const projectsList = nodes.filter(item => item.locale === locale);

  const ProjectCardRender = ({
    title,
    description,
    preview_img,
    slug,
    index,
  }) => {
    const imageData = getImage(preview_img.localFile);

    return (
      <motion.div
        className="projects__item project-card"
        {...animations.appearance}
        custom={index * 0.1}
      >
        <div className="project-card__inner">
          <Link to={`/project/${slug}`}>
            <div className="project-card__content">
              <h3 className="project-card__title">
                <b>{title}</b>
                <br />
                {description}
              </h3>
              <div className="project-card__more-info">{more}</div>
              <GatsbyImage
                className="project-card__img"
                alt={title}
                image={imageData}
              />
            </div>
          </Link>
        </div>
      </motion.div>
    );
  };

  return (
    <Layout title={pageTitle}>
      <MainSection title={pageTitle} sectionClass={"projects"}>
        <div className="main__content row">
          <div className="projects__wrapper">
            <div className="projects__list">
              {projectsList.map((projectItem, i) => (
                <ProjectCardRender
                  key={projectItem.id}
                  {...projectItem}
                  index={i}
                />
              ))}
            </div>
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
        more
      }
    }
    allStrapiProjects(sort: { fields: order, order: DESC }) {
      nodes {
        id
        title
        locale
        description
        slug
        preview_img {
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
  }
`;
