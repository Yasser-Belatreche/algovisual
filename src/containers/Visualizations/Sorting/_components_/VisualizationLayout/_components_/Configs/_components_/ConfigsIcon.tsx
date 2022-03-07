import React from "react";
import Image from "next/image";

// styles
import styles from "../../../../../Sorting.module.scss";

// utils
import { ICONS } from "../../../../../../../../utils/constants/Icons";

interface Props {
  onClick: () => void;
}

const ConfigsIcon: React.FC<Props> = ({ onClick }) => {
  return (
    <div className={styles.configsButtonContainer} onClick={onClick}>
      <Image src={ICONS.settings} alt="configs button" />
    </div>
  );
};

export { ConfigsIcon };
