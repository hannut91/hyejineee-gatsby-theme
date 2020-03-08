import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import style from "../styles/main.module.css";
import Category from "./categories";
import HeaderBio from "./header-bio";

const Layout = ({ children }) => {
  const result = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          categories
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
      <header className={style.header}>
        <div>
          <p> hyejineee.dev </p>
        </div>
        <div className={style.wrapper}>
          <HeaderBio siteMetadata={siteMetadata} />
          <Category categories={siteMetadata.categories} />
        </div>
      </header>

      <main className={style.wrapper}>{children}</main>
    </div>
  );
};
export default Layout;
