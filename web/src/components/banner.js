import * as styles from "./banner.module.css";
import React from "react";


function Banner(props) {
  return (
    <div className={styles.mainBanner}>
    <p>{props.title}</p>
</div>
  );
}

export default Banner;