import React from "react";
import Image from "next/image";
import classNames from "classnames/bind";

// styles
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: StaticImageData;
  secondary?: boolean;
  full?: boolean;
}

const Button: React.FC<Props> = ({
  label,
  icon,
  secondary,
  full,
  ...props
}) => {
  const className = cx("buttonContainer", { bgOrange: secondary }, { full });

  return (
    <button className={`${className} ${props.className}`} {...props}>
      <p>{label}</p>
      <Icon icon={icon} />
    </button>
  );
};

const Icon = ({ icon }: { icon?: StaticImageData }) => {
  return icon ? (
    <div className={styles.iconContainer}>
      <Image src={icon} alt="button icon" />
    </div>
  ) : null;
};

export { Button };
