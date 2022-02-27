import Image from "next/image";
import React from "react";
import { ICONS } from "../../../../../../../../../utils/constants/Icons";

// styles
import styles from "../../../../../../Sorting.module.scss";

interface Props {}

const SeeCodeButton: React.FC = () => {
  return (
    <div className={styles.seeCodeContainer}>
      <Image src={ICONS.code} alt="see code icon" />
    </div>
  );
};

export { SeeCodeButton };
