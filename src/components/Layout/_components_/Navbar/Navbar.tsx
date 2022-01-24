import React from "react";
import Image from "next/image";

// utils
import { IMAGES } from "../../../../utils/constants/Images";

// styles
import styles from "../../Layout.module.scss";

interface Props {}

const Navbar: React.FC<Props> = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <Image src={IMAGES.regularLogo} alt="Logo" layout="fill" />
        </div>
      </div>
    </div>
  );
};

export { Navbar };
