import React from "react";
import { Link } from "gatsby";

const PostItem = ({ data }) => {
  const tags = ["tag1", "tag2", "tag3", "tag4"];
  console.log(data);
  return (
    <div>
      <img />
      <div>
        <span>{data.frontmatter.date}</span>
        <span>{data.frontmatter.category}</span>
      </div>
      <h3>
        <Link to={data.frontmatter.path}>{data.frontmatter.title}</Link>
      </h3>
      <p>
        {data.frontmatter.summary}
      </p>
      <div>
        {data.frontmatter.tags.map((tag, i) => (
          <span key={i}>{tag} </span>
        ))}
      </div>
    </div>
  );
};

export default PostItem;
