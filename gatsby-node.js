exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  deletePage(page);

  createPage({
    ...page,
    context: {
      ...page.context,
      locale: page.context.intl.language,
    },
  });
};

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query ProjectPage {
      allStrapiProjects {
        nodes {
          id
          locale
          slug
        }
      }
    }
  `);
  data.allStrapiProjects.nodes.forEach(item => {
    const { slug, locale } = item;

    actions.createPage({
      path: `/project/${slug}`,
      component: require.resolve(`./src/templates/ProjectPage.jsx`),
      context: { slug, locale },
    });
  });
};
