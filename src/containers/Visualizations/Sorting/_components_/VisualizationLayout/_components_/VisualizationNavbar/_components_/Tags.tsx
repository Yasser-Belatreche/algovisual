import Image from "next/image";
import React from "react";

// style
import styles from "../../../../../Sorting.module.scss";

// utils
import { ICONS } from "../../../../../../../../utils/constants/Icons";

const TAGS = ["algorithms", "sorting", "bubble sort"];

interface Props {}

const Tags: React.FC<Props> = () => {
  return (
    <div className={styles.tagsContainer}>
      {TAGS.map((tag) => (
        <Tag name={tag} key={tag} />
      ))}
    </div>
  );
};

interface TagProps {
  name: string;
}

const Tag: React.FC<TagProps> = ({ name }) => {
  return (
    <div className={styles.tag}>
      <h2>{name}</h2>
      <Image src={ICONS.arrowLeft} alt="left arrow" />
    </div>
  );
};

export { Tags };
