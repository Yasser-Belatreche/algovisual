import React from "react";

// styles
import styles from "../../Sorting.module.scss";

// components
import { VisualizationNavbar } from "./_components_/VisualizationNavbar/VisualizationNavbar";

interface Props {}

const VisualizationLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <VisualizationNavbar />
      <main className={styles.content}>
        <div className={styles.container}>{children}</div>
      </main>
    </>
  );
};

export { VisualizationLayout };
