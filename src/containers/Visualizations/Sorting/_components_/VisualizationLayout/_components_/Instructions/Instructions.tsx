import React, { useState } from "react";

// styles
import styles from "../../../../Sorting.module.scss";

// components
import { InstructionsIcon } from "./_components_/InstructionsIcon";
import { InstructionsModel } from "./_components_/InstructionsModel";

interface Props {}

const Instructions: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={styles.instructions}>
      <InstructionsIcon onClick={() => setIsOpen(true)} />
      {isOpen && <InstructionsModel closeModel={() => setIsOpen(false)} />}
    </div>
  );
};

export { Instructions };
