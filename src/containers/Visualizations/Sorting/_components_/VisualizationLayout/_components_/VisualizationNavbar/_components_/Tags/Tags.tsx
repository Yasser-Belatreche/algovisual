import React from "react";

// style
import styles from "../../../../../../Sorting.module.scss";

// components
import Tag from "./_components_/Tag";

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

export { Tags };
