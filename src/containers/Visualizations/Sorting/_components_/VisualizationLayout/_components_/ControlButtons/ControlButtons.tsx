import React from "react";

// styles
import styles from "../../../../Sorting.module.scss";

// components
import { ButtonsContainer } from "./_components_/ButtonsContainer";
import { ProgessBar } from "./_components_/ProgressBar";

interface Props {}

const ControlButtons: React.FC<Props> = () => {
  return (
    <div className={styles.controlButtonsContainer}>
      <ButtonsContainer />
      <ProgessBar />
    </div>
  );
};

export { ControlButtons };
