import React, { useState } from "react";

// styles
import styles from "../../../../Sorting.module.scss";

// components
import { Logo } from "./_components_/Logo";
import { Tags } from "./_components_/Tags";
import { SeeCode } from "./_components_/SeeCode/SeeCode";

interface Props {}

const VisualizationNavbar: React.FC<Props> = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logoAndTags}>
          <Logo />
          <Tags />
        </div>

        <SeeCode />
      </div>
    </div>
  );
};

export { VisualizationNavbar };
