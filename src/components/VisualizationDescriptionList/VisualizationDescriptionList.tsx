import React, { useRef } from "react";

// styles
import styles from "./VisualizationDescriptionList.module.scss";

// components
import { DescriptionItem } from "./_components_/DescriptionItem";

export type Item = {
  title: string;
  description: string;
  pageLink: string;
  image: StaticImageData;
};

interface Props {
  listItems: Item[];
  firstItemTextPosition: "left" | "right";
  containerClass?: string;
}

const VisualizationDescriptionList: React.FC<Props> = ({
  listItems,
  firstItemTextPosition,
  containerClass,
}) => {
  const offset = useRef<number>(1);

  if (firstItemTextPosition === "left") offset.current = 0;
  else offset.current = 1;

  return (
    <div
      className={`${styles.container} ${containerClass}`}
      role="listContainer"
    >
      {listItems.map((item, index) => {
        const isReversed = (index + offset.current) % 2 === 0;

        return <DescriptionItem key={index} {...item} reverse={isReversed} />;
      })}
    </div>
  );
};

export { VisualizationDescriptionList };
