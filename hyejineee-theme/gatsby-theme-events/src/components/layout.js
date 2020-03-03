import React from "react";
import Header from "./header";

import style from "../styles/main.module.css"

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
    <div className={style.container}>
      <header  className={style.wrapper} >
        <Header siteMetadata={siteMetadata} />
      </header>

      <main className={style.wrapper} >{children}</main>
    </div>
  );
};
export default Layout;
