const languages = ["en", "ru"];
const getStrapiCategories = namesArr =>
  namesArr
    .map(name => {
      return languages.map(lang => {
        return {
          name,
          api: {
            qs: {
              _locale: lang,
            },
          },
        };
      });
    })
    .flat();

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Maxim Biryukov - Frontend Developer`,
    description: `Welcome to my site-portfolio! Here you can find my works, skills that I have and my contacts.`,
    author: `Maxim Biryukov`,
    siteUrl: `https://skysar.site/`,
  },
  assetPrefix: "assets",
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-asset-path",
      options: {
        removeMapFiles: true,
        fileTypes: ["js", "map", "css", "json", "txt", "png"],
        copyAssets: false,
      },
    },
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        purgeCSSOptions: {
          safelist: [/gatsby/],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Maxim Biryukov - Frontend Developer`,
        short_name: `Maxim Biryukov - Frontend Developer`,
        start_url: `/`,
        background_color: `#efe6d6`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-intl",
      options: {
        path: `${__dirname}/src/intl`,
        languages: languages,
        defaultLanguage: "en",
        redirect: true,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.GATSBY_API_URL || "http://localhost:1337",
        queryLimit: 1000,
        collectionTypes: getStrapiCategories(["projects"]),
        singleTypes: getStrapiCategories([
          "about-me",
          "skills",
          "projects-page",
          "contact",
        ]),
        loginData: {
          identifier: "",
          password: "",
        },
      },
    },
  ],
};
