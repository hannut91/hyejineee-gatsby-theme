module.exports = {
  siteMetadata: {
    title: `hyejineee`,
    siteUrl: `http://hyejineee.github.io`,
    description: `어떻게 살아야 하는가ㅏ🤔`,
    imageUrl: 'https://avatars3.githubusercontent.com/u/44992033?s=460&v=4',
    categories: ['Posts','Daily Journals','About me']
  },

  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `contents`,
        path: `${__dirname}/contents/`,
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
