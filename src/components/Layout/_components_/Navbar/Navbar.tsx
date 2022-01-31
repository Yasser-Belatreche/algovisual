import React, { useEffect, useState } from "react";
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
  const [withBorder, setWithBorder] = useState<boolean>(false);
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpened(!isMenuOpened);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) setWithBorder(true);
      else setWithBorder(false);
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={cx("navbar", { withBorder })}>
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
