import React from "react";

// styles
import styles from "../../../../../../../Sorting.module.scss";

interface Props {}

const InstructionsList: React.FC<Props> = () => {
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

export { InstructionsList };
