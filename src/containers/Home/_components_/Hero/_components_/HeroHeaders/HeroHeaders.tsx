import React from "react";

// styles
import styles from "../../../../Home.module.scss";

// components
import { BigTitle } from "./_components_/BigTitle";
import { Description } from "./_components_/Description";
import { Buttons } from "./_components_/Buttons";

const HeroHeaders: React.FC = () => {
  return (
    <div className={styles.headersContainer}>
      <BigTitle />
      <Description />
      <Buttons />
    </div>
  );
};

export { HeroHeaders };
