import Image from "next/image";
import React from "react";
import { Button } from "../../../../../../../../components/Button/Button";

// utils
import { ICONS } from "../../../../../../../../utils/constants/Icons";

// styles
import styles from "../../../../../Sorting.module.scss";

interface Props {}

const ButtonsContainer: React.FC<Props> = () => {
  return (
    <div className={styles.buttonsContainer}>
      <div className={styles.prevNextButtonContainer}>
        <Image src={ICONS.prevButton} alt="prev button" />
      </div>

      <div className={styles.playButtonContainer}>
        <Image src={ICONS.stopButton} alt="play button" />
      </div>

      <div className={styles.prevNextButtonContainer}>
        <Image src={ICONS.nextButton} alt="next button" />
      </div>
    </div>
  );
};
export { ButtonsContainer };
