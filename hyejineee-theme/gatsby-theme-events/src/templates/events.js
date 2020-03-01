import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import PostList from "../components/post-list";

const EventsTemplate = () => {
  const result = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            excerpt(truncate: true, pruneLength: 200)
            frontmatter {
              title
              path
              date(formatString: "YYYY-MM-DD")
            }
            id
          }
        }
      }
    }
  `);

  const events = result.allMarkdownRemark.edges;

  return (
    <Layout>
      <PostList posts={events} />
    </Layout>
  );
};

export default EventsTemplate;
