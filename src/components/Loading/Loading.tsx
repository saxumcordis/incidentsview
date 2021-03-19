import React from "react";

import styles from "./Loading.module.scss";

export const Loading = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.content}>. . .</div>
    </div>
  );
};
