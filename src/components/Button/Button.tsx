import React from "react";

import Image from "next/image";
import classNames from "classnames/bind";

// styles
import styles from "./Button.module.css";

const cx = classNames.bind(styles);

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  backgroundColor: "blue" | "orange";
  icon: string;
}

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<Props> = ({ children, onClick, icon, ...props }) => {
  return (
    <button onClick={onClick} {...props}>
      <p>{children}</p>
      {icon && <Image src={icon} alt="button icon" />}
    </button>
  );
};

export { Button };
