import Image from "next/image";
import React from "react";

// styles
import styles from "./PageHeader.module.scss";

// components
import { BlueBackground } from "../BlueBackground/BlueBackground";
import { HeroTitle } from "../HeroTitle/HeroTitle";

interface Props {
  title: string;
  backgroundImage: StaticImageData;
}

const PageHeader: React.FC<Props> = ({ title, backgroundImage }) => {
  return (
    <BlueBackground className={styles.container}>
      <HeroTitle color="white">{title}</HeroTitle>
      <Image
        alt="background image"
        src={backgroundImage}
        layout="fill"
        objectFit="cover"
      />
    </BlueBackground>
  );
};

export { PageHeader };
