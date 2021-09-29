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
    {
      resolve: "gatsby-plugin-asset-path",
      options: {
        removeMapFiles: true,
        // paths: ["static"],
        fileTypes: ["js", "map", "css", "json", "txt"],
        copyAssets: false,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
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
        apiURL: process.env.API_URL || "http://localhost:1337",
        queryLimit: 1000,
        collectionTypes: getStrapiCategories(["projects"]),
        singleTypes: getStrapiCategories(["about-me"]),
        loginData: {
          identifier: "",
          password: "",
        },
      },
    },
  ],
};
