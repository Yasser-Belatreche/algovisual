import Image from "next/image";
import React from "react";

// utils
import { ICONS } from "../../../../../../../../../../utils/constants/Icons";

// styles
import styles from "../../../../../../../Sorting.module.scss";

interface Props {
  openCode: () => void;
}

const SeeCodeButton: React.FC<Props> = ({ openCode }) => {
  return (
    <div className={styles.seeCodeButton} onClick={openCode}>
      <Image src={ICONS.code} alt="see code icon" />
    </div>
  );
};

export { SeeCodeButton };
