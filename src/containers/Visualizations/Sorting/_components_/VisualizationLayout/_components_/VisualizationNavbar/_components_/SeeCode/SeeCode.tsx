import React, { useState } from "react";

// components
import { CodePanel } from "./_components_/CodePanel";
import { SeeCodeButton } from "./_components_/SeeCodeButton";

interface Props {}

const SeeCode: React.FC<Props> = () => {
  const [isCodeOpen, setIsCodeOpen] = useState<boolean>(false);

  return (
    <>
      <SeeCodeButton openCode={() => setIsCodeOpen(true)} />
      <CodePanel isOpen={isCodeOpen} closePanel={() => setIsCodeOpen(false)} />
    </>
  );
};

export { SeeCode };
