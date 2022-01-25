import React from "react";

// styles
import styles from "../../Layout.module.scss";

// components
import { Logo } from "./_components_/Logo";
import { NavLinks } from "./_components_/NavLinks";

export interface Props {}

const Navbar: React.FC<Props> = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navContainer}>
        <Logo />
        <NavLinks />

        <div className={styles.buttonContainer}>
          <button>Contribute</button>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
