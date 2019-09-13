module.exports = {
  siteMetadata: {
    title: "Fegoulis Photography",
    description: "Explore wonderfully photos taken by Kostas Fegoulis",
    keywords: "photography, photos, images, pictures, gallery, kostas fegoulis",
    image: "/static/logo.jpg",
    siteUrl: "https://fegoulisphotography.netlify.com/",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
}
