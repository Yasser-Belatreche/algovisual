import React from "react";

// styles
import styles from "./Layout.module.scss";

// components
import { Navbar } from "./_components_/Navbar/Navbar";
import { Credit } from "./_components_/Credit/Credit";

interface Props {
  navbarReversed?: boolean;
}

const Layout: React.FC<Props> = ({ children, navbarReversed = false }) => {
  return (
    <>
      <Navbar reverseColors={navbarReversed} />
      <main className={styles.contentContainer}>{children}</main>
      <Credit />
    </>
  );
};

export { Layout };
