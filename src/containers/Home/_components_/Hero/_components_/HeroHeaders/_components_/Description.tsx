import React from "react";

// styles
import styles from "../../../../../Home.module.scss";

// components
import { Button } from "../../../../../../../components/Button/Button";

const Description: React.FC = () => {
  return (
    <p className={styles.desc}>
      Level up your knowledge with our Comprehensive and Interactive
      explanations and Visualizations of different Algorithms and Data
      structures.
    </p>
  );
};

export { Description };
