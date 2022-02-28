import React from "react";

// styles
import styles from "../../Sorting.module.scss";

// components
import { VisualizationNavbar } from "./_components_/VisualizationNavbar/VisualizationNavbar";
import { ControlButtons } from "./_components_/ControlButtons/ControlButtons";
import { Instructions } from "./_components_/Instructions/Instructions";
import { Configs } from "./_components_/Configs/Configs";

interface Props {}

const VisualizationLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <VisualizationNavbar />
      <main className={styles.content}>
        {children}

        <ControlButtons />
        <Instructions />
        <Configs />
      </main>
    </>
  );
};

export { VisualizationLayout };
