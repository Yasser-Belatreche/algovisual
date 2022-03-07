import Image from "next/image";
import React from "react";

import { IMAGES } from "../../../../../../../../utils/constants/Images";

// styles
import styles from "../../../../../Sorting.module.scss";

// components
import { Button } from "../../../../../../../../components/Button/Button";

interface Props {
  closeModel: () => void;
}

const InstructionsModel: React.FC<Props> = ({ closeModel }) => {
  return (
    <div className={styles.model}>
      <div className={styles.contentContainer}>
        <div className={styles.top}>
          <div className={styles.instructionsContainer}>
            <h4>How Bubble Sort works :</h4>
            <InstructionsList />
          </div>

          <div className={styles.picContainer}>
            <Image
              src={IMAGES.character_1}
              alt="person character"
              placeholder="blur"
            />
          </div>
        </div>

        <div className={styles.buttonsContainer}>
          <Button label="Ok, understood" onClick={closeModel} full />
          <Button label="Read more" className={styles.readMore} />
        </div>
      </div>
    </div>
  );
};

const InstructionsList: React.FC = () => {
  return (
    <>
      {instructions.map((instruction, index) => {
        return (
          <div className={styles.instruction} key={index}>
            <span>{index + 1} . </span>
            <p>{instruction}</p>
          </div>
        );
      })}
    </>
  );
};

const instructions = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do smod tempor",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do smod tempor",
];

export { InstructionsModel };
