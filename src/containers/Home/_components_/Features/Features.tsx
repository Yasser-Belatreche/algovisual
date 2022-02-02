import React from "react";

// styles
import styles from "../../Home.module.scss";

// utils
import { FEATURES } from "./_utils_/Features";

// components
import { Feature } from "./_components_/Feature";
import { BlueBackground } from "../../../../components/BlueBackground/BlueBackground";

const Features: React.FC = () => {
  return (
    <BlueBackground className={styles.features}>
      {FEATURES.map((feature) => (
        <Feature {...feature} key={feature.title} />
      ))}
    </BlueBackground>
  );
};

export { Features };
