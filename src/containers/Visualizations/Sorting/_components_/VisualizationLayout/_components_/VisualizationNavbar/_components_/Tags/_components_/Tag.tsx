import React from "react";
import Image from "next/image";

// style
import styles from "../../../../../.././../Sorting.module.scss";

// utils
import { ICONS } from "../../../../../../../../../../utils/constants/Icons";

interface Props {
  name: string;
}

const Tag: React.FC<Props> = ({ name }) => {
  return (
    <div className={styles.tag}>
      <h2>{name}</h2>
      <Image src={ICONS.arrowLeft} alt="left arrow" />
    </div>
  );
};

export default Tag;
