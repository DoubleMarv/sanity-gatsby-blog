import React from "react";

import * as styles from "./container-fullwidth.module.css";

const FullContainer = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

export default FullContainer;
