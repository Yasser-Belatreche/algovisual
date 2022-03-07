import React from "react";
import Image from "next/image";

// styles
import styles from "../../../Home.module.scss";

// utils
import { IMAGES } from "../../../../../utils/constants/Images";

const HeroPic: React.FC = () => {
  return (
    <div className={styles.picContainer}>
      <Image
        src={IMAGES.heroImage}
        alt="person hold a flag"
        placeholder="blur"
      />
    </div>
  );
};

export { HeroPic };
