import Image from "next/image";
import React from "react";

// utils
import { ICONS } from "../../../../../../../utils/constants/Icons";

// styles
import styles from "../../../../Sorting.module.scss";

interface Props {}

const Instructions: React.FC<Props> = () => {
  return (
    <div className={styles.instructions}>
      <div className={styles.instructionsButtonContainer}>
        <Image src={ICONS.instructions} alt="instructions button" />
      </div>
    </div>
  );
};

export { Instructions };
