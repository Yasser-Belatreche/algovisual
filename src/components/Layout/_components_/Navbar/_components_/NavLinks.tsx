import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// styles
import styles from "../../../Layout.module.scss";

const LINKS = [
  {
    title: "home",
    href: "/",
  },
  {
    title: "algorithms",
    href: "/algorithms",
  },
  {
    title: "data structures",
    href: "/data-structures",
  },
  {
    title: "about",
    href: "/about",
  },
];

const NavLinks: React.FC = () => {
  const router = useRouter();

  console.log(router.asPath);

  return (
    <nav className={styles.navLinks}>
      {LINKS.map((link) => (
        <NavLink
          {...link}
          key={link.title}
          isActive={link.href === router.asPath}
        />
      ))}
    </nav>
  );
};

interface NavLinkProps {
  isActive: boolean;
  title: string;
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ isActive, href, title }) => {
  const temp = ["navLink"];
  if (isActive) temp.push("active");

  const className = temp.map((el) => styles[el]).join(" ");

  return (
    <div className={className}>
      <Link href={href} passHref>
        {title}
      </Link>
    </div>
  );
};

export { NavLinks };
