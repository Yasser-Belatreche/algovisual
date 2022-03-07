import React from "react";
import Image from "next/image";
import classNames from "classnames/bind";

// styles
import styles from "../../../../../../../Sorting.module.scss";

// utils
import { ICONS } from "../../../../../../../../../../utils/constants/Icons";

const cx = classNames.bind(styles);

interface Props {
  isOpen: boolean;
  closePanel: () => void;
}

const CodePanel: React.FC<Props> = ({ isOpen, closePanel }) => {
  return (
    <div className={cx("codePanel", { isOpen })}>
      <div className={styles.overlay} onClick={closePanel}></div>
      <div className={styles.panelContainer}>
        <div className={styles.closeButton} onClick={closePanel}>
          <Image src={ICONS.close} alt="close icon" />
        </div>

        <div className={styles.content}>
          <h3>Bubble Sort Code :</h3>
        </div>
      </div>
    </div>
  );
};

export { CodePanel };
