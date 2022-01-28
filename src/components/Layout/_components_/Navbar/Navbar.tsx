import React, { useState } from "react";
import classNames from "classnames/bind";

// styles
import styles from "../../Layout.module.scss";

// components
import { Logo } from "./_components_/Logo";
import { NavLinks } from "./_components_/NavLinks";
import { ContributeButton } from "./_components_/ContributeButton";
import { ToggleMenuBars } from "./_components_/ToggleMenuBars";

const cx = classNames.bind(styles);

export interface Props {}

const Navbar: React.FC<Props> = () => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpened(!isMenuOpened);

  return (
    <div className={styles.navbar}>
      <div className={cx("navContainer", { open: isMenuOpened })}>
        <Logo />
        <NavLinks />
        <ContributeButton />
        <ToggleMenuBars onClick={toggleMenu} />
      </div>
    </div>
  );
};

export { Navbar };
