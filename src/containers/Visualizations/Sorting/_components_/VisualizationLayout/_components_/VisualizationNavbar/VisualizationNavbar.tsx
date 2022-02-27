import React from "react";

// styles
import styles from "../../../../Sorting.module.scss";

// components
import { Logo } from "./_components_/Logo/Logo";
import { Tags } from "./_components_/Tags/Tags";
import { SeeCodeButton } from "./_components_/SeeCodeButton/SeeCodeButton";

interface Props {}

const VisualizationNavbar: React.FC<Props> = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logoAndTags}>
          <Logo />
          <Tags />
        </div>

        <SeeCodeButton />
      </div>
    </div>
  );
};

export { VisualizationNavbar };
