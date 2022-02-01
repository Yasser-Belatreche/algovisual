import React from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames/bind";

// styles
import styles from "../VisualizationDescriptionList.module.scss";

// utils
import type { Item } from "../VisualizationDescriptionList";

const cx = classNames.bind(styles);

interface Props extends Item {
  reverse: boolean;
}

const DescriptionItem: React.FC<Props> = ({
  image,
  description,
  pageLink,
  title,
  reverse,
}) => {
  return (
    <div className={cx("descriptionItem", { reverse })}>
      <div className={styles.picContainer}>
        <Image src={image} placeholder="blur" alt="description pic" />
      </div>

      <div className={styles.text}>
        <h2> {title}</h2>

        <p className={styles.desc}>{description}</p>

        <Link href={pageLink} passHref>
          See Visualization
        </Link>
      </div>
    </div>
  );
};

export { DescriptionItem };
