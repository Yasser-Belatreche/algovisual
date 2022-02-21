import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

// styles
import styles from "../../Layout.module.scss";

// components
import { Logo } from "./_components_/Logo";
import { NavLinks } from "./_components_/NavLinks";
import { ContributeButton } from "./_components_/ContributeButton";
import { ToggleMenuBars } from "./_components_/ToggleMenuBars";

// hooks
import { useResponsiveMenu } from "./_hooks_/useResponsiveMenu";
import { useNavbarState } from "./_hooks_/useNavbarState";

const cx = classNames.bind(styles);

interface Props {
  reverseColors: boolean;
}

const Navbar: React.FC<Props> = ({ reverseColors }) => {
  const { toggleMenu, isMenuOpened } = useResponsiveMenu();
  const { colorsReversed, withBorder } = useNavbarState({ reverseColors });

  return (
    <div className={cx("navbar", { withBorder, colorsReversed })}>
      <div className={cx("navContainer", { open: isMenuOpened })}>
        <Logo colorsReversed={colorsReversed} />
        <NavLinks />
        <ContributeButton />
        <ToggleMenuBars onClick={toggleMenu} />
      </div>
    </div>
  );
};

export { Navbar };
