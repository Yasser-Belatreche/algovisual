import React from "react";

// styles
import styles from "../../Home.module.scss";

// utils
import { FEATURES } from "./_utils_/data";

// components
import { Feature } from "./_components_/Feature";

const Features: React.FC = () => {
  return (
    <div className={styles.features}>
      {FEATURES.map((feature) => (
        <Feature {...feature} key={feature.title} />
      ))}
    </div>
  );
};

export { Features };
