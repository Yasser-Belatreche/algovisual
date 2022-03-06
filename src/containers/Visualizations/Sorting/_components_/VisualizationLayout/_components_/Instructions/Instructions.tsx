import React, { useState } from "react";

// styles
import styles from "../../../../Sorting.module.scss";

// components
import { InstructionsIcon } from "./_components_/InstructionsIcon";
import { InstructionsModel } from "./_components_/InstructionsModel/InstructionsModel";

interface Props {}

const Instructions: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleModel = () => setIsOpen(!isOpen);

  return (
    <div className={styles.instructions}>
      <InstructionsIcon onClick={toggleModel} />
      {isOpen && <InstructionsModel toggleModel={toggleModel} />}
    </div>
  );
};

export { Instructions };
