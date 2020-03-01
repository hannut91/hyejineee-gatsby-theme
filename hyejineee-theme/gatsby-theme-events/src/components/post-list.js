import React from "react";
import { Link } from "gatsby";
const PostList = ({ posts }) => (
  <>
    <h2>Upcoming Events</h2>
    <ul>

    
      {posts.map(post => (
        <li key={post.node.id}>
          <h2>
            <Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link>
          </h2>
          <h3>{post.node.frontmatter.date}</h3>
          <p>{post.node.excerpt}</p>
          <hr />
        </li>
      ))}
    </ul>
  </>
);

export default PostList;
