import React from "react";
import { Link } from "gatsby";
import style from "../styles/categories.module.css";

const Category = ({ categories }) => {
  return (
    <div className={style.container}>
      {categories.map((category, index) => (
        <Link key={index} to={`/${category}`}>
          {category}
        </Link>
      ))}
    </div>
  );
};

export default Category;
