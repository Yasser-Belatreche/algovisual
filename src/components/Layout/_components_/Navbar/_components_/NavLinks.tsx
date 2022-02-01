import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames/bind";

// styles
import styles from "../../../Layout.module.scss";

// utils
import { LINKS } from "../_utils_/Links";

const cx = classNames.bind(styles);

const NavLinks: React.FC = () => {
  const { asPath: currentPath } = useRouter();

  return (
    <nav className={styles.navLinks}>
      {LINKS.map((link) => (
        <NavLink
          {...link}
          key={link.title}
          isActive={link.path === currentPath}
        />
      ))}
    </nav>
  );
};

interface NavLinkProps {
  isActive: boolean;
  title: string;
  path: string;
}

const NavLink: React.FC<NavLinkProps> = ({ isActive, path, title }) => {
  const className = cx("navLink", { active: isActive });

  return (
    <div className={className}>
      <Link href={path} passHref>
        {title}
      </Link>
    </div>
  );
};

export { NavLinks };
