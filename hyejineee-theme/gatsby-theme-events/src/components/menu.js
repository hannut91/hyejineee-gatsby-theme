import React from "react";
import { Link } from "gatsby";

const Menu = ({ categories }) => {
  return (
    <div>
      {categories.map((category, index) => (
        <Link key={index} to={`/${category}`}>
          {category}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
