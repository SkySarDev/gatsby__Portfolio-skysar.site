import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useIntl } from "gatsby-plugin-intl";

import Layout from "components/Layout";
import Seo from "components/seo";

const IndexPage = ({ data }) => {
  const { locale } = useIntl();
  const { title, description, image } = data.allStrapiAboutMe.nodes.find(
    item => item.locale === locale
  );
  const imageData = getImage(image.localFile);

  return (
    <Layout>
      <Seo title={title} />
      <h1>{title}</h1>
      <p>{description}</p>
      <GatsbyImage alt={title} image={imageData} />
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
        description
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(formats: [AUTO, WEBP, AVIF], placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;
