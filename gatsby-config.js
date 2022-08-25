module.exports = {
  siteMetadata: {
    siteUrl: "https://kevlarsecuritysolutions.com.au",
    title: "Kevlar Security Solutions",
    isSearchEnabled: "true",
    navigationStyle: "",
    isServiceWorkerEnabled: "false",
    isSwitcherEnabled: "true",
    description:
      "Kevlar Security Solutions is a proudly Tasmanian owned and operated company specialising in the provision of physical security services, including concierge, security patrol, alarm response, alarm system monitoring and static guard services.",
    keywords: "kevlar,security,solutions",
    lang: "en",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "XXX",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/kss-logo-white.png",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
  ],
};
