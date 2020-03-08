import React from "react";

import style from "../styles/bio-header.module.css";
import CountInfo from "./header-count";

const HeaderBio = siteMetadata => {
  const { title, description, imageUrl, categorys } = siteMetadata.siteMetadata;
  return (
    <div className={style.container}>
      <img src={imageUrl} />
      <div>
        <h1>{title}</h1>
        <p>{description}</p>

        {/* <ul>
          <li> 
            <CountInfo countInfo ={} />
          </li>

          <li> 
            <CountInfo countInfo={}/>
          </li>

          <li> 
            <CountInfo countInfo={}/>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default HeaderBio;
