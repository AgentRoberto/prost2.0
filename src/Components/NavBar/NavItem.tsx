import Link from "next/link";
import React from "react";

const NavItem = ({ text, href, active }: any) => {
  return (
    <Link href={href}
      className={`nav__item ${
        active ? "active" : ""
      }`}
    >
      {text}
    </Link>
  );
};

export default NavItem
