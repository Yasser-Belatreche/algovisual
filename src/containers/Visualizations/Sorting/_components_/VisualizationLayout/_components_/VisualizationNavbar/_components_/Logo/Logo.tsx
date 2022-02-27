import React from "react";
import Image from "next/image";
import Link from "next/link";

// utils
import { IMAGES } from "../../../../../../../../../utils/constants/Images";

// styles
import styles from "../../../../../../Sorting.module.scss";

const Logo: React.FC = () => {
  return (
    <Link href={"/"} passHref>
      <div className={styles.logoContainer}>
        <Image src={IMAGES.logo} alt="Logo" placeholder="blur" />
      </div>
    </Link>
  );
};

export { Logo };
