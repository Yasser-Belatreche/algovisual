import React from "react";

// styles
import styles from "../../../../../Sorting.module.scss";

interface Props {}

const ProgessBar: React.FC<Props> = () => {
  return (
    <div className={styles.progressBarContainer}>
      <span></span>
    </div>
  );
};

export { ProgessBar };
