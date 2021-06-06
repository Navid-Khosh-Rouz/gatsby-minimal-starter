const { toPairs } = require("ramda");

const {
  pathPrefix,
  title,
  author,
  description,
  siteUrl,
  twitter = "",
  github = "",
  medium = "",
  facebook = "",
  disqusShortName = "",
  lang = "en",
  googleTrackingId: trackingId,
} = require("./config").site;
const supportedLanguages = require("./config").supportedLanguages;

module.exports = {
  siteMetadata: {
    title,
    author,
    description,
    siteUrl,
    social: {
      twitter,
      github,
      medium,
      facebook,
    },
    disqusShortName,
    lang,
    langsEntries: toPairs(supportedLanguages),
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
