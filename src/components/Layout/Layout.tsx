import React from "react";

// styles
import styles from "./Layout.module.scss";

// components
import { Navbar } from "./_components_/Navbar/Navbar";
import { Credit } from "./_components_/Credit/Credit";

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Credit />
    </>
  );
};

export { Layout };
