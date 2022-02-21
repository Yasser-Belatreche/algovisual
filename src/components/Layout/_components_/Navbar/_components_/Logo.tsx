import React from "react";
import Image from "next/image";
import Link from "next/link";

// utils
import { IMAGES } from "../../../../../utils/constants/Images";

// styles
import styles from "../../../Layout.module.scss";

interface Props {
  colorsReversed: boolean;
}

const Logo: React.FC<Props> = ({ colorsReversed }) => {
  return (
    <Link href={"/"} passHref>
      <div className={styles.logoContainer}>
        <Image
          src={colorsReversed ? IMAGES.logoWhite : IMAGES.logo}
          alt="Logo"
          placeholder="blur"
        />
      </div>
    </Link>
  );
};

export { Logo };
