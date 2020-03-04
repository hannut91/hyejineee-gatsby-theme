import React from "react";

import style from "../styles/post-item.module.css";

import { Link } from "gatsby";

const PostItem = ({ data }) => {
  const tags = ["tag1", "tag2", "tag3", "tag4"];
  console.log(data);
  return (
    <div className={style.container}>
      <img />
      <p className={style.category}>{data.frontmatter.category}</p>
      <h3>
        <Link to={data.frontmatter.path}>{data.frontmatter.title}</Link>
      </h3>
      <p>{data.frontmatter.summary}</p>
      <div>
        {data.frontmatter.tags.map((tag, i) => (
          <span key={i} className={style.tag}>
            {tag}{" "}
          </span>
        ))}
      </div>
      <p className={style.date}>{data.frontmatter.date}</p>
    </div>
  );
};

export default PostItem;
