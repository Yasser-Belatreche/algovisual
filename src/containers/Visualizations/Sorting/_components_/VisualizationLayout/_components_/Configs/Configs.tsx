import React, { useState } from "react";
import classNames from "classnames/bind";

// styles
import styles from "../../../../Sorting.module.scss";

// components
import { ConfigsIcon } from "./_components_/ConfigsIcon";
import { ConfigsPanel } from "./_components_/ConfigsPanel";

interface Props {}

const Configs: React.FC<Props> = () => {
  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false);

  return (
    <div className={styles.configs}>
      <ConfigsIcon onClick={() => setIsPanelOpen(true)} />
      <ConfigsPanel
        isOpen={isPanelOpen}
        closePanel={() => setIsPanelOpen(false)}
      />
    </div>
  );
};

export { Configs };
