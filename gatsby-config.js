module.exports = {
  siteMetadata: {
    siteUrl: "https://kevlarsecuritysolutions.com.au",
    title: "Kevlar Security Solutions",
    titleTemplate: `%s | Kevlar Security Solutions`,
    description: `Kevlar Security Solutions is a proudly Tasmanian owned and operated company specialising in the provision of physical security services, including concierge, security patrol, alarm response, alarm system monitoring and static guard services.`,
    author: `@kevlarsecuritysolutions`,
    lang: "en",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-VGB3GE3MV9",],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Kevlar Security Solutions",
        short_name: "KSS",
        start_url: "/",
        background_color: "#001a2f",
        theme_color: "#2699fb",
        display: "standalone",
        icon: "src/assets/images/favicon.png",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: ["/404", "/404.html"],
      },
    },
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
