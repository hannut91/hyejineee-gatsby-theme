import React from "react";

import style from "../styles/post-item.module.css"

import { Link } from "gatsby";

const PostItem = ({ data }) => {
  const tags = ["tag1", "tag2", "tag3", "tag4"];
  console.log(data);
  return (
    <div className ={style.container}>
      <img />
      <div>
        <span className={style.category} >{data.frontmatter.category}</span>
        <span className={style.date}>{data.frontmatter.date}</span>
      </div>
      <h3>
        <Link to={data.frontmatter.path}>{data.frontmatter.title}</Link>
      </h3>
      <p>
        {data.frontmatter.summary}
      </p>
      <div >
        {data.frontmatter.tags.map((tag, i) => (
          <span key={i} className={style.tag}>{tag} </span>
        ))}
      </div>
    </div>
  );
};

export default PostItem;
