import React from "react";
import { graphql } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";

import Layout from "components/Layout";

const Projects = ({ data }) => {
  // const { locale } = useIntl();
  // const { nodes } = data.allStrapiProjects;
  // const { title: pageTitle } = data.allStrapiProjectsPage.nodes.find(
  //   item => item.locale === locale
  // );
  // const projectsList = nodes.filter(item => item.locale === locale);

  return (
    <Layout title={"Contact"}>
      <h1>{"Contact"}</h1>
      <p>Contacts</p>
    </Layout>
  );
};

export default Projects;

// export const query = graphql`
//   query Projects {
//     allStrapiProjectsPage {
//       nodes {
//         locale
//         title
//       }
//     }
//     allStrapiProjects {
//       nodes {
//         id
//         title
//         locale
//         description
//       }
//     }
//   }
// `;
