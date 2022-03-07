import React from "react";
import Image from "next/image";

// styles
import styles from "../../../Home.module.scss";

// components
import { HeroTitle } from "../../../../../components/HeroTitle/HeroTitle";
import { Button } from "../../../../../components/Button/Button";

// utils
import { ICONS } from "../../../../../utils/constants/Icons";

const HeroHeaders: React.FC = () => {
  return (
    <div className={styles.headersContainer}>
      <HeroTitle>
        Learn Algorithms <span>And Data Structures</span> The Easy Way
      </HeroTitle>

      <p className={styles.desc}>
        Level up your knowledge with our Comprehensive and Interactive
        explanations and Visualizations of different Algorithms and Data
        structures.
      </p>

      <div className={styles.buttonsContainer}>
        <Button label="start learning" />
        <IconButton />
      </div>
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

export { HeroHeaders };
