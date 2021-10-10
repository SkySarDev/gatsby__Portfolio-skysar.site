import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useIntl } from "gatsby-plugin-intl";

import Layout from "components/Layout";
import MainSection from "components/MainContent/MainSection";

import "components/MainContent/MainContent.scss";
import "components/MainContent/MainContentAbout.scss";

const IndexPage = ({ data }) => {
  const { locale } = useIntl();
  const {
    title,
    description_title,
    description_subtitle,
    description1,
    description2,
    image,
  } = data.allStrapiAboutMe.nodes.find(item => item.locale === locale);
  const imageData = getImage(image.localFile);

  return (
    <Layout title={title}>
      <MainSection title={title} sectionClass={"about"}>
        <div className="main__content about__content row">
          <div className="about__img-wrapper col-md-7 col-xl-6">
            <GatsbyImage
              className="about__img"
              alt={title}
              image={imageData}
              objectFit={"contain"}
            />
          </div>
          <div className="about__description-wrapper col-md-5 col-xl-4">
            <div className="about__description-content">
              <h1 className="about__description-title">{description_title}</h1>
              <p className="about__description-subtitle">
                {description_subtitle}
              </p>
              <p className="about__description-text">{description1}</p>
              <p className="about__description-text">{description2}</p>
            </div>
          </div>
        </div>
      </MainSection>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query AboutMe {
    allStrapiAboutMe {
      nodes {
        locale
        title
        description_title
        description_subtitle
        description1
        description2
        image {
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
