const fs = require("fs");

// Make sure the data directory exists
exports.onPreBootstrap = ({ reporter }) => {
  const contentPath = "src/contents";

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};


exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const basePath = options.basePath || "/";

  actions.createPage({
    path: basePath,

    component: require.resolve("./src/templates/events.js")
  });

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }

        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("error loading events", result.errors);

    return;
  }

  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach(({ node }) => {
    actions.createPage({
      path: `${node.frontmatter.path}`,
      component: require.resolve("./src/templates/md-template.js"),
      context: {
        path: node.frontmatter.path
      }
    });
  });
};
