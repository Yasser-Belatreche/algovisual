import Image from "next/image";
import React from "react";

// utils
import { ICONS } from "../../../../../../../utils/constants/Icons";

// styles
import styles from "../../../../Sorting.module.scss";

interface Props {}

const Configs: React.FC<Props> = () => {
  return (
    <div className={styles.configs}>
      <div className={styles.configsButtonContainer}>
        <Image src={ICONS.settings} alt="configs button" />
      </div>
    </div>
  );
};

export { Configs };
