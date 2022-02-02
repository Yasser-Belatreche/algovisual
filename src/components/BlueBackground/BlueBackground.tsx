import React from "react";

// styles
import styles from "./BlueBackground.module.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const BlueBackground: React.FC<Props> = ({
  children,
  className: classFromProps,
  ...props
}) => {
  return (
    <div
      className={`${styles.container} ${classFromProps}`}
      {...props}
      role="container"
    >
      {children}
    </div>
  );
};

export { BlueBackground };
