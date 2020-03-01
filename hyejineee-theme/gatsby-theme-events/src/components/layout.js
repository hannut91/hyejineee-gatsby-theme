import React from "react";
import Header from "./header";
import { graphql, useStaticQuery } from "gatsby";

const Layout = ({ children }) => {
  const result = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          categorys
          description
          imageUrl
          siteUrl
          title
        }
      }
    }
  `);

  const siteMetadata = result.site.siteMetadata;

  return (
    <div>
      <header>
        <Header siteMetadata={siteMetadata} />
      
      </header>

      <main>{children}</main>
    </div>
  );
};
export default Layout;
