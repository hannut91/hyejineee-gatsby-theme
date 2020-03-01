import React from "react";
import { Link } from "gatsby";

const Header = siteMetadata => {
  const { title, description, imageUrl, categorys } = siteMetadata.siteMetadata;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      {/* <img src={} /> */}

      <div>
        {categorys.map((category, index) => (
          <Link key={index} to={`/${category}`}>
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
