import React from "react";
import classNames from "classnames/bind";

// styles
import styles from "./HeroTitle.module.scss";

const cx = classNames.bind(styles);

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  color?: "black" | "white";
}

const HeroTitle: React.FC<Props> = ({
  children,
  color,
  className: classFromProps,
  ...props
}) => {
  const className = cx("title", { white: color == "white" });

  return (
    <h1 className={`${className} ${classFromProps}`} {...props}>
      {children}
    </h1>
  );
};

export { HeroTitle };
