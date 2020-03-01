module.exports = {
  siteMetadata: {
    title: `hyejineee`,
    siteUrl: `http://hyejineee.github.io`,
    description: `어떻게 살아야 하는가ㅏ🤔`,
  },

  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `contents`,
        path: `${__dirname}/src/contents/`,
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`
          }
        ]
      }
    }
  ]
};
