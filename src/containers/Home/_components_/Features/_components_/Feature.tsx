import React from "react";
import Image from "next/image";

// styles
import styles from "../../../Home.module.scss";

interface Props {
  image: StaticImageData;
  title: string;
  description: string;
}

const Feature: React.FC<Props> = ({ image, title, description }) => {
  return (
    <div className={styles.feature}>
      <div className={styles.picContainer}>
        <Image src={image} alt="tasks pic" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export { Feature };
