import React from "react";
import PostItem from "./post-item";
const PostList = ({ posts }) => {
  return (
    <>
      <ul>
        {posts.map(post => {
          const data = post.node
          return (
            <li key={data.id}>
              <PostItem data = {data}></PostItem>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default PostList;
