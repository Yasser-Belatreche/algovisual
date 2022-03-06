import Image from "next/image";
import React from "react";

import { IMAGES } from "../../../../../../../../../utils/constants/Images";

// styles
import styles from "../../../../../../Sorting.module.scss";

// components
import { Button } from "../../../../../../../../../components/Button/Button";
import { InstructionsList } from "./_components_/InstructionsList";

interface Props {
  toggleModel: () => void;
}

const InstructionsModel: React.FC<Props> = ({ toggleModel }) => {
  return (
    <div className={styles.model}>
      <div className={styles.contentContainer}>
        <div className={styles.top}>
          <div className={styles.instructionsContainer}>
            <h4>How Bubble Sort works :</h4>
            <InstructionsList />
          </div>

          <div className={styles.picContainer}>
            <Image src={IMAGES.character_1} alt="person character" />
          </div>
        </div>

        <ButtonsContainer toggleModel={toggleModel} />
      </div>
    </div>
  );
};

const ButtonsContainer: React.FC<Props> = ({ toggleModel }) => {
  return (
    <div className={styles.buttonsContainer}>
      <Button label="Ok, understood" onClick={toggleModel} full />
      <Button label="Read more" className={styles.readMore} />
    </div>
  );
};

export { InstructionsModel };
