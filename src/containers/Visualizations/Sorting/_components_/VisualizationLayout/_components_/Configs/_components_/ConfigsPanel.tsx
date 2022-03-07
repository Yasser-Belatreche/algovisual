import React from "react";
import classNames from "classnames/bind";

// styles
import styles from "../../../../../Sorting.module.scss";
import Image from "next/image";
import { ICONS } from "../../../../../../../../utils/constants/Icons";

const cx = classNames.bind(styles);

interface Props {
  isOpen: boolean;
  closePanel: () => void;
}

const ConfigsPanel: React.FC<Props> = ({ isOpen, closePanel }) => {
  return (
    <div className={cx("panel", { isOpen })}>
      <div className={styles.overlay} onClick={closePanel}></div>
      <div className={styles.container}>
        <div className={styles.closeButton} onClick={closePanel}>
          <Image src={ICONS.close} alt="close icon" />
        </div>

        <h3>Configs :</h3>
      </div>
    </div>
  );
};

export { ConfigsPanel };
