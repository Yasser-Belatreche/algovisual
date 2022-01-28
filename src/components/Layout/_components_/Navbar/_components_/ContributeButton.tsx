import React from "react";

// styles
import styles from "../../../Layout.module.scss";

// utils
import { ICONS } from "../../../../../utils/constants/Icons";

// components
import { Button } from "../../../../Button/Button";

interface Props {}

const ContributeButton: React.FC<Props> = () => {
  return (
    <a
      href="https://github.com/Yasser-Belatreche/algovisual"
      rel="noreferrer"
      target={"_blank"}
      className={styles.contributeButton}
    >
      <Button label="contribute" secondary icon={ICONS.github} />
    </a>
  );
};

export { ContributeButton };
