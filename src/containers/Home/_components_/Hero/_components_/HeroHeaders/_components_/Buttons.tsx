import React from "react";
import Image from "next/image";

// styles
import styles from "../../../../../Home.module.scss";

// utils
import { ICONS } from "../../../../../../../utils/constants/Icons";

// components
import { Button } from "../../../../../../../components/Button/Button";

const Buttons: React.FC = () => {
  return (
    <div className={styles.buttonsContainer}>
      <Button label="start learning" />
      <IconButton />
    </div>
  );
};

const IconButton: React.FC = () => {
  return (
    <button className={styles.iconButton}>
      <Image src={ICONS.arrowDown} alt="arrow down" />
    </button>
  );
};

export { Buttons };
