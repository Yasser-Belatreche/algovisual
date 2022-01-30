import React from "react";

// styles
import styles from "../../../../../Home.module.scss";

// components
import { Button } from "../../../../../../../components/Button/Button";

const Buttons: React.FC = () => {
  return (
    <div className={styles.buttonsContainer}>
      <Button label="start learning" />
    </div>
  );
};

export { Buttons };
