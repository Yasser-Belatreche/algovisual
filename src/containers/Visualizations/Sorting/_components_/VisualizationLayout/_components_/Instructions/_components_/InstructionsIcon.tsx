import Image from "next/image";
import React from "react";

// styles
import styles from "../../../../../Sorting.module.scss";

// icons
import { ICONS } from "../../../../../../../../utils/constants/Icons";

interface Props {
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const InstructionsIcon: React.FC<Props> = ({ onClick }) => {
  return (
    <div className={styles.instructionsButtonContainer} onClick={onClick}>
      <Image src={ICONS.instructions} alt="instructions button" />
    </div>
  );
};

export { InstructionsIcon };
