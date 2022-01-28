import React from "react";

import styles from "../../../Layout.module.scss";

interface Props {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const ToggleMenuBars: React.FC<Props> = ({ onClick }) => {
  return (
    <div onClick={onClick} className={styles.barsContainer}>
      <span className={styles.bar} />
      <span className={styles.bar} />
      <span className={styles.bar} />
    </div>
  );
};

export { ToggleMenuBars };
