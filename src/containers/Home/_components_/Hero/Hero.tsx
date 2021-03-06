import React from "react";
import Image from "next/image";

// styles
import styles from "../../Home.module.scss";

// components
import { HeroHeaders } from "./_components_/HeroHeaders";
import { HeroPic } from "./_components_/HeroPic";

interface Props {}

const Hero: React.FC<Props> = () => {
  return (
    <section className={styles.hero}>
      <HeroHeaders />
      <HeroPic />
    </section>
  );
};

export { Hero };
