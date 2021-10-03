import React from "react";
import { graphql } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";

import Layout from "components/Layout";
import Seo from "components/seo";

const IndexPage = ({ data }) => {
  const { locale } = useIntl();
  const { title, skillsList } = data.allStrapiSkills.nodes.find(
    item => item.locale === locale
  );

  return (
    <Layout>
      <Seo title={title} />
      <h1>{title}</h1>

      {skillsList.map(({ title, icon, list }) => {
        const titleImg = require(`../images/skills/${icon}.svg`).default;

        return (
          <div key={title}>
            <h3>{title}</h3>
            <img src={titleImg} alt={title} width={40} height={40} />
            <ul>
              {list.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query Skills {
    allStrapiSkills {
      nodes {
        locale
        title
        skillsList {
          icon
          list
          title
        }
      }
    }
  }
`;
