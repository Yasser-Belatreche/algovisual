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
  const handleClick = () => {
    window.scrollTo({ top: window.innerHeight * 2, behavior: "smooth" });
  };

  return (
    <button className={styles.iconButton} onClick={handleClick}>
      <Image src={ICONS.arrowDown} alt="arrow down" />
    </button>
  );
};

export { Buttons };
